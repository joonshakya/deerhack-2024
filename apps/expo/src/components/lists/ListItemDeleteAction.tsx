import { TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "tailwind.config";

interface ListItemDeleteActionProps {
  onPress: () => void;
}

export default function ListItemDeleteAction({
  onPress,
}: ListItemDeleteActionProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className="bg-danger w-16 items-center justify-center">
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
