import { useEffect, useRef } from "react";
import {
  AccessibilityInfo,
  findNodeHandle,
  RefreshControl,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "tailwind.config";

import ActivityIndicator from "~/components/ActivityIndicator";
import InfoText from "~/components/InfoText";
import { trpc } from "~/utils/trpc";
import AppText from "../components/AppText";
import { ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import routes from "../navigation/routes";

export default function EventRecordCategoriesScreen({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamList,
    routes.EVENT_CATEGORIES
  >;
  route: RouteProp<AppNavigatorParamList, routes.EVENT_CATEGORIES>;
}) {
  const { eventId } = route.params;

  const {
    data: categories,
    isLoading: categoriesLoading,
    refetch,
  } = trpc.event.getTracks.useQuery({
    eventId,
  });

  console.log({
    categories,
  });

  const ref = useRef<Text>(null);

  return (
    <>
      <ActivityIndicator visible={categoriesLoading} />
      <Screen
        noSafeArea
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              refetch();
            }}
          />
        }
        className="px-5 pb-20"
      >
        {categories ? (
          <View className="mt-2">
            <Text ref={ref} className="text-mediumGray px-5 py-2 text-sm">
              Categories
            </Text>
            {categories.length === 0 ? (
              <InfoText text="No categories found" />
            ) : null}
            <View className="rounded-xl bg-white">
              {categories.map((category) => (
                <View key={category.id}>
                  <TouchableHighlight
                    accessibilityRole="button"
                    underlayColor={colors.highlight}
                    onPress={() => {
                      navigation.navigate(routes.TOOLS, {
                        categoryId: category.id,
                      });
                    }}
                  >
                    <View className="h-12 flex-row items-center justify-between px-5">
                      <AppText className="text-lg">{category.title}</AppText>
                      <MaterialCommunityIcons
                        name="chevron-right"
                        size={24}
                        color={colors.mediumGray}
                      />
                    </View>
                  </TouchableHighlight>
                  <ListItemSeparator height={2} color={colors.lightGray} />
                </View>
              ))}
            </View>
          </View>
        ) : null}
      </Screen>
    </>
  );
}
