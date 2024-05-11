import { Button, Platform } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import FindScribeScreen from "~/screens/FindScribeScreen";
import NotificationsScreen from "~/screens/NotificationsScreen";
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
  [routes.USER_PROFILE]: {
    noBackRoute: boolean;
    userId?: string;
  };
  [routes.FIND_SCRIBE]: undefined;
  [routes.NOTIFICATIONS]: undefined;
  [routes.ROOM_LIST]: {
    fromRoomId: string;
  };
  [routes.DIRECTIONS]: {
    fromRoomId: string;
    toRoomId: string;
  };
  [routes.SHARE_APP]: undefined;
};

export type AppNavigatorParamList = HomeTabParamList &
  HomeTabNavigatorParamList &
  ToolsParamList &
  MultipleScreensParamList;

function backButton(
  navigation: NativeStackNavigationProp<AppNavigatorParamList>,
) {
  return (
    <Button
      title="Done"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

export default function AppNavigator() {
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
      <Stack.Screen component={HomeScreen} name={routes.HOME} />

      {/* Tools End */}

      {/* Multiple Screens */}
      <Stack.Screen
        options={{
          headerShown: true,
          title: "Find Scribe",
        }}
        component={FindScribeScreen}
        name={routes.FIND_SCRIBE}
      />

      <Stack.Screen
        options={{
          headerShown: true,
        }}
        component={NotificationsScreen}
        name={routes.NOTIFICATIONS}
      />

      {/* Multiple Screens End */}
    </Stack.Navigator>
  );
}
