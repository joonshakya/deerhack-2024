import { useEffect } from "react";
import { Alert, Button, Platform, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { colors } from "tailwind.config";

import { QrScanner } from "~/components/QrScanner";
import EventCreateScreen from "~/screens/EventCreateScreen";
import EventRecordCategoriesScreen from "~/screens/EventRecordCategoriesScreen";
import FindScribeScreen from "~/screens/FormBuilderScreen";
import NotificationsScreen from "~/screens/NotificationsScreen";
import QrInfoScreen from "~/screens/QrInfoScreen";
import ToolsScreen from "~/screens/ToolsScreen";
import { useBearStore } from "~/store";
import { trpc } from "~/utils/trpc";
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
  [routes.QR_INFO]: {
    categoryId: string | undefined;
    id: string;
    invalidate: boolean;
  };
  [routes.EVENT_CATEGORIES]: {
    eventId: string;
  };
  [routes.TOOLS]: {
    categoryId: string;
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

  const utils = trpc.useUtils();

  const { mutate: createCategory, isLoading: createCategoryLoading } =
    trpc.event.createCategory.useMutation({
      onSuccess: () => {
        utils.invalidate();
      },
    });

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
        options={({ route, navigation }) => ({
          headerShown: true,
          title: "Event Categories",
          headerRight(props) {
            return (
              <TouchableOpacity
                // className="mr-4"
                onPress={() => {
                  Alert.prompt("Create Category", "Enter category name", [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: (categoryName) => {
                        console.log("OK Pressed", categoryName);
                        createCategory({
                          eventId: route.params.eventId,
                          title: categoryName || "New Category",
                        });
                      },
                    },
                  ]);
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
        component={EventRecordCategoriesScreen}
        name={routes.EVENT_CATEGORIES}
      />
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
          title: "QR Scanner",
        }}
        component={ToolsScreen}
        name={routes.TOOLS}
      />
      <Stack.Screen
        options={{
          title: "Info",
          headerShown: true,
        }}
        component={QrInfoScreen}
        name={routes.QR_INFO}
      />

      {/* Multiple Screens End */}
    </Stack.Navigator>
  );
}
