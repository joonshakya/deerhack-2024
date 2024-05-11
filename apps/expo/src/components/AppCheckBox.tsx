import { Pressable } from "react-native";
import CheckBox, { CheckboxProps } from "expo-checkbox";
import { colors } from "tailwind.config";

import AppText from "./AppText";

interface AppCheckBoxProps extends CheckboxProps {
  my0?: boolean;
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  disabled?: boolean;
}

export default function AppCheckBox({
  my0,
  label,
  value,
  onValueChange,
  disabled,
  ...otherProps
}: AppCheckBoxProps) {
  return (
    <Pressable
      role="checkbox"
      accessibilityState={{ checked: value }}
      disabled={disabled}
      onPress={() => onValueChange(!value)}
      className={`flex-1 flex-row items-center ${my0 ? "my-0" : "my-0"}`}
    >
      <CheckBox
        disabled={disabled}
        className="m-2"
        color={colors.primary}
        value={value}
        onValueChange={() => onValueChange(!value)}
        {...otherProps}
      />
      <AppText className={disabled ? "text-mediumGray" : ""}>{label}</AppText>
    </Pressable>
  );
}
