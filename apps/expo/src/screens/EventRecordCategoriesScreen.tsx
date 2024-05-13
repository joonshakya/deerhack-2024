import { useEffect, useRef, useState } from "react";
import {
  AccessibilityInfo,
  findNodeHandle,
  Modal,
  RefreshControl,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import PDFReader from "@bildau/rn-pdf-reader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "tailwind.config";

import ActivityIndicator from "~/components/ActivityIndicator";
import AppButton from "~/components/AppButton";
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

  const ref = useRef<Text>(null);

  const [modalVisible, setModalVisible] = useState(false);

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
        className="flex-1 px-5 pb-20"
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
      <View className="bg-white px-5 pb-4">
        <AppButton
          title="Generate QR Code"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <Modal
        collapsable
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <PDFReader
          style={{
            flex: 1,
          }}
          source={{
            uri: "https://deerhack.joon.com.np/generateQR.pdf",
          }}
        />
        <TouchableOpacity
          className="absolute right-4 top-12 h-14 w-14 flex-row items-center justify-center rounded-full bg-[#0000006e]"
          onPress={() => setModalVisible(false)}
        >
          <MaterialCommunityIcons
            className="m-4"
            color={colors.white}
            name="close"
            size={40}
          />
        </TouchableOpacity>
      </Modal>
    </>
  );
}
