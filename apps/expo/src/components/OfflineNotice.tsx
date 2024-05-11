import { View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import AppText from "./AppText";

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  const internet =
    netInfo.type !== "unknown" && netInfo.isInternetReachable === false;

  if (internet && !internet)
    // TODO: make internet check better later
    return (
      <View
        style={{ paddingTop: Constants.statusBarHeight }}
        className="bg-red absolute top-0 z-10 w-full items-center justify-center"
      >
        <AppText className="m-2 text-white">No Internet Connection.</AppText>
      </View>
    );

  return null;
}
