import { useEffect } from "react";
import { Platform } from "react-native";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";

import { trpc } from "~/utils/trpc";
import { navigatePush } from "../navigation/routeNavigation";
import routes from "../navigation/routes";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function useNotifications() {
  const { mutate: useSetNotificationId } =
    trpc.user.setNoificationId.useMutation({
      onError: (error) => {
        throw new Error(error.message);
      },
    });
  useEffect(() => {
    registerForPushNotifications();

    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener(
        (response: Notifications.NotificationResponse) => {
          navigatePush(
            response.notification.request.content.data.screen as routes,
            response.notification.request.content.data.params as any,
          );
        },
      );

    return () => {
      responseSubscription.remove();
    };
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig?.extra?.eas.projectId,
        })
      ).data;
      useSetNotificationId({ notificationId: token });
    } catch (error) {
      throw new Error("Error getting a push token");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
      Notifications.setNotificationChannelAsync("chat", {
        name: "chat",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
  };
}
