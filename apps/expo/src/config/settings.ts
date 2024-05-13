import Constants from "expo-constants";

const debuggerHost = Constants.expoConfig?.hostUri;
const localhost = debuggerHost?.split(":")[0] || "localhost";
const apiUrl = `http://${localhost}:4000`;
const wsUrl = `ws://${localhost}:4000`;

export const storageDomain = "https://www.example.org.np";

const settings = {
  dev: {
    apiUrl,
    // apiUrl: "https://api.example.org.np",
    webUrl: "https://www.example.org.np",
    wsUrl,
  },
  prod: {
    apiUrl,

    // apiUrl: "https://api.example.org.np",
    webUrl: "https://www.example.org.np",
    wsUrl,
  },
};

const getCurrentSettings = () => {
  // eslint-disable-next-line no-undef
  if (__DEV__) return settings.dev;
  return settings.prod;
};

export default getCurrentSettings();
