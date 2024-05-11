import { useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import * as NavigationBar from "expo-navigation-bar";
import * as Notifications from "expo-notifications";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { NativeWindStyleSheet } from "nativewind";

import { TRPCProvider } from "~/utils/trpc";
import AuthProvider from "./src/auth/context";
import OfflineNotice from "./src/components/OfflineNotice";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import navigationTheme from "./src/navigation/navigationTheme";
import { navigationRef } from "./src/navigation/routeNavigation";
import UploadScreen from "./src/screens/AppProgress";
import { useAuthStore, useBearStore } from "./src/store";

if (Platform.OS !== "web") {
  Blob.prototype[Symbol.toStringTag] = "Blob";
  File.prototype[Symbol.toStringTag] = "File";
}

LogBox.ignoreLogs(["Could not find image"]);

if (Platform.OS === "android") {
  NavigationBar.setBackgroundColorAsync("white");
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

SplashScreen.preventAutoHideAsync();

export default function App() {
  const user = useAuthStore((state) => state.user);
  const initialLoaded = useBearStore((state) => state.initialLoaded);
  const loadingVisible = useBearStore((state) => state.loadingVisible);
  const setLoadingVisible = useBearStore((state) => state.setLoadingVisible);

  useEffect(() => {
    if (initialLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 0);
    }
  }, [initialLoaded]);

  return (
    <TRPCProvider>
      <MenuProvider>
        <AuthProvider>
          <OfflineNotice />
          <UploadScreen
            visible={loadingVisible}
            onDone={() => {
              setLoadingVisible(false);
            }}
            progress={1}
          />
          <NavigationContainer theme={navigationTheme} ref={navigationRef}>
            <GestureHandlerRootView className="flex-1 bg-white">
              {user ? <AppNavigator /> : <AuthNavigator />}
            </GestureHandlerRootView>
          </NavigationContainer>
        </AuthProvider>
      </MenuProvider>
    </TRPCProvider>
  );
}
