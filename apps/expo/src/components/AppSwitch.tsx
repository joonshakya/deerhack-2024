import {
  AccessibilityInfo,
  Platform,
  Switch,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import AppText from "./AppText";

export default function AppSwitch({
  my0,
  label,
  value,
  onValueChange,
  ...otherProps
}: {
  my0?: boolean;
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}) {
  return Platform.OS === "android" ? (
    <TouchableWithoutFeedback onPress={() => onValueChange(!value)}>
      <View className="flex-row px-5">
        <View
          aria-hidden
          accessibilityElementsHidden
          className={`flex-1 ${my0 ? "my-0" : "my-0"}`}
        >
          <AppText
            accessibilityElementsHidden
            aria-hidden
            className="flex-1 py-3 text-base"
          >
            {label}
          </AppText>
        </View>
        <Switch
          accessibilityLabel={label}
          className="ml-2"
          onValueChange={(newValue) => onValueChange(newValue)}
          value={value}
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <TouchableWithoutFeedback
      accessibilityLabel={label}
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      onPress={() => {
        onValueChange(!value);
        AccessibilityInfo.announceForAccessibility(
          `Switch is now ${!value ? "on" : "off"}`,
        );
      }}
    >
      <View
        className={`flex-row items-center justify-between ${
          my0 ? "my-0" : "my-0"
        } px-5`}
      >
        <AppText className="flex-1 py-3 text-base">{label}</AppText>
        <Switch
          aria-hidden
          accessibilityElementsHidden
          className="ml-2"
          onValueChange={(newValue) => onValueChange(newValue)}
          value={value}
          {...otherProps}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
