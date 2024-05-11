import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

import { NotificationTypeChoice } from ".prisma/client";

const key = "authToken";

const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    throw new Error("Error storing the auth token");
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    throw new Error("Error getting the auth token");
  }
};

const getUser = async (): Promise<any> => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    throw new Error("Error removing the auth token");
  }
};

const setDisabledNotifications = async (value: string[]) => {
  try {
    await SecureStore.setItemAsync(
      "disabledNotifications",
      JSON.stringify(value),
    );
  } catch (error) {
    throw new Error("Error storing the compactPost");
  }
};

const getDisabledNotifications = async (): Promise<
  NotificationTypeChoice[]
> => {
  try {
    const value = await SecureStore.getItemAsync("disabledNotifications");
    if (!value) return [];
    return JSON.parse(value);
  } catch (error) {
    throw new Error("Error getting the compactPost");
  }
};

export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
  getDisabledNotifications,
  setDisabledNotifications,
};
