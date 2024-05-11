import { TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "tailwind.config";

import useNotifications from "~/hooks/useNotifications";
import ToolsScreen from "~/screens/ToolsScreen";
import { useBearStore } from "~/store";
import defaultStyles from "../config/styles";
// import TutorialsScreen from "../screens/TutorialsScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import routes from "./routes";

// import NotificationsScreen from "../screens/NotificationsScreen";

export type HomeTabNavigatorParamList = {
  [routes.HOME]: undefined;
  [routes.NOTIFICATIONS]: undefined;
  [routes.SETTINGS]: undefined;
  [routes.TOOLS]: undefined;
};

interface TabIconProps {
  color: string;
  size: number;
}

const tabToolsIcon = ({ color, size }: TabIconProps) => (
  <MaterialCommunityIcons color={color} name="tools" size={size} />
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

  const userRole = useBearStore((state) => state.userRole);

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: defaultStyles.headerStyle,
        headerShown: true,
      }}
    >
      {userRole === "ORGANIZER" && (
        <Tab.Screen
          component={HomeScreen}
          name={routes.HOME}
          options={({ navigation }) => ({
            headerShown: true,
            title: "Events",
            tabBarIcon: ({ color, size }: { color: string; size: number }) => (
              <MaterialCommunityIcons color={color} name="home" size={size} />
            ),
            headerRight(props) {
              return (
                <TouchableOpacity
                  className="mr-4"
                  onPress={() => {
                    navigation.push(routes.CREATE_EVENT);
                  }}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    size={24}
                    color={colors.primary}
                  />
                </TouchableOpacity>
              );
            },
          })}
        />
      )}

      {/* <Tab.Screen
        component={NotificationsScreen}
        name={routes.NOTIFICATIONS}
        options={{
          tabBarIcon: tabNotificationsIcon,
        }}
      /> */}
      <Tab.Screen
        component={ToolsScreen}
        name={routes.TOOLS}
        options={{
          title: "QR Scanner",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <MaterialCommunityIcons
              color={color}
              name="qrcode-scan"
              size={size}
            />
          ),
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
