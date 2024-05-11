import { ReactNode } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "tailwind.config";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

export interface MainInputProps extends TextInputProps {
  icon?: string;
  my0?: boolean;
  children?: ReactNode;
  onPress?: () => void;
  passwordField?: boolean;
  setSecureTextEntry?: (value: boolean) => void;
}

export interface AppTextInputProps extends MainInputProps {
  label?: string;
}

function MainInput({
  icon,
  my0,
  children,
  passwordField,
  ...otherProps
}: MainInputProps) {
  return (
    <View
      className={`border-light7 w-full flex-row items-center justify-center rounded-xl border-2 ${
        my0 ? "my-0" : "my-2"
      }`}
    >
      {icon && (
        <MaterialCommunityIcons
          color={colors.mediumGray}
          name={icon as any}
          size={20}
          className="mr-2"
        />
      )}
      {children || (
        <TextInput
          placeholderTextColor={colors.mediumGray}
          style={[defaultStyles.text]}
          className="flex-1 p-3 px-4"
          {...otherProps}
        />
      )}
      {passwordField && (
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Toggle password visibility"
          accessibilityValue={
            otherProps.secureTextEntry
              ? {
                  text: "Password is hidden",
                }
              : {
                  text: "Password is visible",
                }
          }
          onPress={() => {
            otherProps.setSecureTextEntry?.(!otherProps.secureTextEntry);
          }}
          className="mx-2"
        >
          <MaterialCommunityIcons
            color={colors.grey}
            name={otherProps.secureTextEntry ? "eye-off" : "eye"}
            size={20}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default function AppTextInput({
  label,
  onPress,
  my0,
  children,
  ...otherProps
}: AppTextInputProps) {
  return (
    <View>
      {label ? (
        <AppText className="text-mediumGray mx-3 mt-2 text-sm">{label}</AppText>
      ) : null}
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <MainInput my0={my0} accessibilityLabel={label} {...otherProps}>
            {children}
          </MainInput>
        </TouchableOpacity>
      ) : (
        <MainInput my0={my0} accessibilityLabel={label} {...otherProps}>
          {children}
        </MainInput>
      )}
    </View>
  );
}
