import { useCallback, useState } from "react";
import {
  ActivityIndicator as NativeActivityIndicator,
  RefreshControl,
  TouchableHighlight,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "tailwind.config";

import AppListItems from "~/components/AppListItems";
import AppTextInput from "~/components/AppTextInput";
import InfoText from "~/components/InfoText";
import { ListTitle } from "~/components/lists/ListTitle";
import { storageDomain } from "~/config/settings";
import { AppNavigatorParamList } from "~/navigation/AppNavigator";
import routes from "~/navigation/routes";
import { useAuthStore } from "~/store";
import { toTitleCase } from "~/utils/toTitleCase";
import { trpc } from "~/utils/trpc";
import AppImage from "../components/AppImage";
import AppText from "../components/AppText";
import { ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import {
  NotificationDataTypeChoice,
  NotificationTypeChoice,
  UserTypeChoice,
} from ".prisma/client";

export default function UsersManageListScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamList,
    routes.NOTIFICATIONS
  >;
}) {
  const { data, isLoading, refetch, isRefetching } =
    trpc.notification.list.useQuery();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  return (
    <Screen
      backgroundColor="white"
      noSafeArea
      refreshControl={<RefreshControl refreshing={false} onRefresh={refetch} />}
    >
      {/* <ListTitle name="Notifications" /> */}
      {isLoading && (
        <View className="h-32 justify-center">
          <NativeActivityIndicator color={colors.primary} size="large" />
        </View>
      )}
      {data && (
        <>
          {data.length === 0 && (
            <View className="py-4">
              <InfoText text="There are no notifications" />
            </View>
          )}
          <View>
            <View className="rounded-xl bg-white">
              {data.map(
                ({ id, type, title, body, dataType, dataId }, index) => {
                  const onPress =
                    dataType === NotificationDataTypeChoice.USER &&
                    dataId !== null
                      ? () => {
                          navigation.push(routes.USER_PROFILE, {
                            noBackRoute: false,
                            userId: dataId,
                          });
                        }
                      : undefined;
                  return (
                    <TouchableHighlight
                      key={id}
                      accessibilityRole={onPress ? "button" : "text"}
                      underlayColor={colors.highlight}
                      onPress={onPress}
                    >
                      <View>
                        {index === 0 ? null : (
                          <View className="pl-5">
                            <ListItemSeparator />
                          </View>
                        )}
                        <View className="flex-row items-center py-2">
                          <View className="ml-4 flex-1">
                            <AppText className="text-lg">{title}</AppText>
                            <View className="flex-row justify-between">
                              <AppText className="text-mediumGray text-base">
                                {body}
                              </AppText>
                              {/* <AppText className="text-mediumGray text-base">
                            {toTitleCase(type)}
                          </AppText> */}
                            </View>
                          </View>
                        </View>
                      </View>
                    </TouchableHighlight>
                  );
                },
              )}
            </View>
          </View>
        </>
      )}
    </Screen>
  );
}
