import { TouchableOpacity } from "react-native";
import { colors } from "tailwind.config";

import AppText from "./AppText";

interface AppButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  textColor?: string;
  className?: string;
  style?: Object;
  disabled?: boolean;
}

export default function AppButton({
  title,
  onPress,
  color = "bg-primary",
  textColor = "text-white",
  className,
  style,
  disabled = false,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      className={`${color} my-2 items-center justify-center rounded-xl p-3 ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      style={style}
      onPress={disabled ? undefined : onPress}
    >
      <AppText className={`text-center text-lg font-bold ${textColor}`}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
}
