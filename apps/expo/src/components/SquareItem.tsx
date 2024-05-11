import { TouchableHighlight, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "tailwind.config";

import AppText from "./AppText";

export default function SquareItem({
  name,
  onPress,
  iconName,
}: {
  name: string;
  onPress?: () => void;
  iconName: any;
}) {
  return (
    <TouchableHighlight
      accessibilityRole="button"
      underlayColor={colors.highlight}
      onPress={onPress}
      className="mb-4 min-h-[112] w-[47%] justify-between rounded-xl bg-white p-5 pb-2"
    >
      <>
        <View className="bg-primary h-10 w-10 items-center justify-center rounded-full">
          <MaterialCommunityIcons name={iconName} size={24} color="white" />
        </View>
        <AppText className="mt-2 text-lg leading-6">{name}</AppText>
      </>
    </TouchableHighlight>
  );
}
