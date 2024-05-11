import { useEffect } from "react";
import { Button, Platform } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import EventCreateScreen from "~/screens/EventCreateScreen";
import FindScribeScreen from "~/screens/FormBuilderScreen";
import NotificationsScreen from "~/screens/NotificationsScreen";
import QrInfoScreen from "~/screens/QrInfoScreen";
import { useBearStore } from "~/store";
import { animation } from "../config/animation";
import defaultStyles from "../config/styles";
import HomeScreen from "../screens/HomeScreen";
import HomeTabNavigator, {
  HomeTabNavigatorParamList,
} from "./HomeTabNavigator";
import routes from "./routes";

// import NotificationsScreen from "../screens/NotificationsScreen";

type HomeTabParamList = {
  [routes.HOME_TAB]: undefined;
};

type ToolsParamList = {
  [routes.HOME]: undefined;
};

type MultipleScreensParamList = {
  [routes.FORM_BUILDER]: undefined;
  [routes.NOTIFICATIONS]: undefined;
  [routes.CREATE_EVENT]:
    | {
        eventId: string;
      }
    | undefined;
  [routes.QR_SCANNER]: undefined;
  [routes.QR_INFO]: {
    id: string;
    invalidate: boolean;
  };
};

export type AppNavigatorParamList = HomeTabParamList &
  HomeTabNavigatorParamList &
  ToolsParamList &
  MultipleScreensParamList;

export default function AppNavigator() {
  const setUserRole = useBearStore((state) => state.setUserRole);

  useEffect(() => {
    setUserRole("ORGANIZER");
  }, []);

  const Stack = createNativeStackNavigator<AppNavigatorParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: defaultStyles.headerStyle,
        headerShown: false,
        animation,
      }}
    >
      {/* HomeTab */}
      <Stack.Screen component={HomeTabNavigator} name={routes.HOME_TAB} />
      {/* HomeTab End */}

      {/* Tools */}
      {/* <Stack.Screen component={HomeScreen} name={routes.HOME} /> */}
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Create Event",
        }}
        component={EventCreateScreen}
        name={routes.CREATE_EVENT}
      />
      {/* Tools End */}

      {/* Multiple Screens */}
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        component={NotificationsScreen}
        name={routes.NOTIFICATIONS}
      />

      <Stack.Screen
        options={{
          headerShown: true,
        }}
        component={QrInfoScreen}
        name={routes.QR_INFO}
      />

      {/* Multiple Screens End */}
    </Stack.Navigator>
  );
}
