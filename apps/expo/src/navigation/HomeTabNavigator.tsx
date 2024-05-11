import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import useNotifications from "~/hooks/useNotifications";
import defaultStyles from "../config/styles";
// import TutorialsScreen from "../screens/TutorialsScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import routes from "./routes";

// import NotificationsScreen from "../screens/NotificationsScreen";

export type HomeTabNavigatorParamList = {
  [routes.HOME]: undefined;
  [routes.USER_PROFILE]: {
    noBackRoute: boolean;
    userId?: string;
  };
  [routes.HISTORY]: {
    noBackRoute: boolean;
    userId?: string;
  };
  [routes.ABOUT]: undefined;
  [routes.TUTORIALS]: undefined;
  [routes.NOTIFICATIONS]: undefined;
  [routes.SETTINGS]: undefined;
};

interface TabIconProps {
  color: string;
  size: number;
}

const tabToolsIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="tools" size={size} />
);
const tabAboutIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="information" size={size} />
);
// const tabTutorialsIcon = ({ color, size }: TabIconProps) => (
//   <MaterialCommunityIcons color={color} name="lightbulb" size={size} />
// );

const tabAccountIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="account" size={size} />
);

const tabHistoryIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="history" size={size} />
);

const tabNotificationsIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="bell" size={size} />
);
const tabSettingsIcon = ({ color, size }: TabIconProps) => (
  <Ionicons name="settings" size={size} color={color} />
);

export default function HomeTabNavigator() {
  const Tab = createBottomTabNavigator<HomeTabNavigatorParamList>();
  useNotifications();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: defaultStyles.headerStyle,
        headerShown: true,
      }}
    >
      <Tab.Screen
        component={HomeScreen}
        name={routes.HOME}
        options={{
          tabBarIcon: tabToolsIcon,
        }}
      />
      {/* <Tab.Screen
        component={AccountScreen}
        initialParams={{ noBackRoute: true }}
        name={routes.USER_PROFILE}
        options={{
          headerShown: true,
          title: "My Profile",
          tabBarIcon: tabAccountIcon,
        }}
      /> */}

      {/* <Tab.Screen
        component={TutorialsScreen}
        name={routes.TUTORIALS}
        options={{
          tabBarIcon: tabTutorialsIcon,
        }}
      /> */}
      <Tab.Screen
        component={NotificationsScreen}
        name={routes.NOTIFICATIONS}
        options={{
          tabBarIcon: tabNotificationsIcon,
        }}
      />
      <Tab.Screen
        component={SettingsScreen}
        name={routes.SETTINGS}
        options={{
          title: "Settings",
          tabBarIcon: tabSettingsIcon,
        }}
      />
    </Tab.Navigator>
  );
}
