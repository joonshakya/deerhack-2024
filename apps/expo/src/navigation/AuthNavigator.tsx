import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RouterOutputs } from "@acme/server";

import ResetPasswordScreen from "~/screens/ResetPasswordScreen";
import { animation } from "../config/animation";
import defaultStyles from "../config/styles";
import LoginScreen, { LoginCredentials } from "../screens/LoginScreen";
import routes from "./routes";

export type AuthNavigatorParamList = {
  [routes.WELCOME]: undefined;
  [routes.LOGIN]: undefined;
  [routes.RESET_PASSWORD]: undefined;
};

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator<AuthNavigatorParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: defaultStyles.headerStyle,
        animation,
        headerShown: false,
      }}
    >
      <Stack.Screen component={LoginScreen} name={routes.LOGIN} />
      <Stack.Screen
        component={ResetPasswordScreen}
        name={routes.RESET_PASSWORD}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
