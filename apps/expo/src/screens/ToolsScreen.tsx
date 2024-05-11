import { useCallback, useRef, useState } from "react";
import { Alert, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import AppText from "../components/AppText";
import { QrScanner } from "../components/QrScanner";
import Screen from "../components/Screen";
import SquareItem from "../components/SquareItem";
import { navigate } from "../navigation/routeNavigation";
import routes from "../navigation/routes";

export default function ToolsScreen() {
  const [modalOpen, setModalOpen] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setModalOpen(true);
    }, []),
  );
  return (
    <Screen noSafeArea className="px-5">
      <AppText bigText className="my-5 font-bold">
        Tools
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
          {
            name: "Enter Ticker Code",
            onPress: async () => {
              Alert.prompt(
                "Enter Ticker Code",
                "Enter the code of your ticket",
                async (ticketId) => {
                  if (ticketId) {
                    navigate(routes.QR_INFO, {
                      ticketId,
                      invalidate: true,
                    });
                  }
                },
              );
            },
            iconName: "keyboard",
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
      <QrScanner modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Screen>
  );
}
