import { DefaultTheme } from "@react-navigation/native";
import { colors } from "tailwind.config";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.iosBackground,
  },
};
