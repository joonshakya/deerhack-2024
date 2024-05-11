import { useCallback, useRef, useState } from "react";
import { Alert, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteProp, useFocusEffect } from "@react-navigation/native";

import { AppNavigatorParamList } from "~/navigation/AppNavigator";
import { HomeTabNavigatorParamList } from "~/navigation/HomeTabNavigator";
import { trpc } from "~/utils/trpc";
import AppText from "../components/AppText";
import { QrScanner } from "../components/QrScanner";
import Screen from "../components/Screen";
import SquareItem from "../components/SquareItem";
import { navigate } from "../navigation/routeNavigation";
import routes from "../navigation/routes";

export default function ToolsScreen({
  route,
}: {
  route: RouteProp<
    AppNavigatorParamList | HomeTabNavigatorParamList,
    routes.TOOLS
  >;
}) {
  const { categoryId } = route.params || {
    categoryId: undefined,
  };

  const { data: categoryData, isLoading: categoryLoading } =
    trpc.track.getCategory.useQuery({ id: categoryId || "" });

  const [modalOpen, setModalOpen] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setModalOpen(true);
    }, []),
  );

  return (
    <Screen noSafeArea className="px-5">
      <AppText bigText className="my-5 font-bold">
        {categoryData?.title || "Tools"}
      </AppText>
      <View className="flex-row flex-wrap justify-between">
        {[
          {
            name: "QR Scanner",
            onPress: () => {
              setModalOpen(true);
            },
            iconName: "qrcode-scan",
          },
        ].map(({ name, onPress, iconName }) => (
          <SquareItem
            key={name}
            name={name}
            onPress={onPress}
            iconName={iconName}
          />
        ))}
      </View>
      <QrScanner
        categoryId={categoryId}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </Screen>
  );
}
