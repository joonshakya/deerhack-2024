import { Alert, Image, Keyboard, View } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Yup from "yup";

import { trpc } from "~/utils/trpc";
import ActivityIndicator from "../components/ActivityIndicator";
import Text from "../components/AppText";
import {
  ErrorMessage,
  Form,
  FormField,
  FormPasswordField,
  SubmitButton,
} from "../components/forms";
import LogoHeader from "../components/LogoHeader";
import Screen from "../components/Screen";
import type { AuthNavigatorParamList } from "../navigation/AuthNavigator";
import routes from "../navigation/routes";
import type { LoginCredentials } from "./LoginScreen";

export default function ResetPasswordScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamList,
    routes.RESET_PASSWORD
  >;
}) {
  const {
    mutate: resetThePassword,
    isLoading,
    error,
  } = trpc.user.resetPassword.useMutation({
    onError: (error_) => {
      throw new Error(error_.message);
    },
    onSuccess(_, variables) {
      Alert.alert("Password reset", "Your password has been reset", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate(routes.LOGIN);
          },
        },
      ]);
    },
  });
  const handleSubmit = ({
    email,

    password,
    confirmPassword,
  }: ResetPasswordForm) => {
    Keyboard.dismiss();
    void resetThePassword({
      email,
      password,
      confirmPassword,
    });
  };

  const initialForm = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  type ResetPasswordForm = typeof initialForm;

  return (
    <>
      <ActivityIndicator visible={isLoading} />
      <Screen backgroundColor="white" className="p-5">
        <LogoHeader />
        <Form
          initialValues={initialForm}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={error?.message ?? "Invalid email or password"}
            visible={!!error}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            name="email"
            label="Enter your email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <FormPasswordField
            autoCapitalize="none"
            autoCorrect={false}
            name="password"
            label="Password"
            textContentType="password"
          />
          <FormPasswordField
            autoCapitalize="none"
            autoCorrect={false}
            name="confirmPassword"
            label="Confirm Password"
            textContentType="password"
          />
          <SubmitButton title="Next" />
        </Form>
      </Screen>
    </>
  );
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
});
