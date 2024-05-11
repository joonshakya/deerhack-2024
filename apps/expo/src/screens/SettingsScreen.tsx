import { useState } from "react";
import { Alert } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "tailwind.config";

import { useAuthContext } from "~/auth/context";
import AppListItems from "../components/AppListItems";
import AppListMenuPicker from "../components/AppListMenuPicker";
import AppSwitch from "../components/AppSwitch";
import Screen from "../components/Screen";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import routes from "../navigation/routes";
import { useBearStore } from "../store";

export default function SettingsScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.SETTINGS>;
}) {
  const [logoutLoading, setLogoutLoading] = useState(false);

  const { logout } = useAuthContext();

  return (
    <Screen noSafeArea className="px-5">
      <AppListItems
        items={[
          {
            name: "About",
            options: [
              {
                title: "Version",
                subTitle: "1.2.1",
                // onPress: () => navigation.navigate(routes.ABOUT),
              },
            ],
          },
          {
            name: "Account",
            options: [
              {
                loading: logoutLoading,
                title: "Logout",
                loadingTitle: "Logging out...",
                onPress: () => {
                  setLogoutLoading(true);
                  logout();
                },
              },
            ],
          },
        ]}
      />
    </Screen>
  );
}
