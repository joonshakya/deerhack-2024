import { Image, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import AppButton from "../components/AppButton";
import Text from "../components/AppText";
import LogoHeader from "../components/LogoHeader";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

export default function Welcome({ navigation }: NativeStackScreenProps<any>) {
  return (
    <Screen className="flex-1 p-5">
      <LogoHeader />
      <View className="w-full flex-1 justify-around">
        <View className="flex-row flex-wrap items-center justify-around">
          <Text bigText>Welcome</Text>
          <Text bigText className="text-center">
            स्वागत छ
          </Text>
          {/* <Text bigText className="text-center">
          jvajalapā.
        </Text> */}
        </View>
        <Text bigText className="text-center">
          Please choose a language.
        </Text>
        <AppButton
          onPress={() => navigation.navigate(routes.LOGIN)}
          title="नेपाली"
        />
        {/* <AppButton
          onPress={() => navigation.navigate(routes.LOGIN)}
          title="newari"
        /> */}
        <AppButton
          onPress={() => navigation.navigate(routes.LOGIN)}
          title="english"
        />
      </View>
    </Screen>
  );
}
