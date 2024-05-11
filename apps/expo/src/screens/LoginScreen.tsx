import { useEffect, useState } from "react";
import {
  Alert,
  Keyboard,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Link } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "tailwind.config";
import * as Yup from "yup";

import { useAuthContext } from "~/auth/context";
import GoogleIcon from "~/components/GoogleIcons";
import { useBearStore } from "~/store";
import { trpc } from "~/utils/trpc";
import ActivityIndicator from "../components/ActivityIndicator";
import Text from "../components/AppText";
import AppText from "../components/AppText";
import {
  ErrorMessage,
  Form,
  FormField,
  FormPasswordField,
  SubmitButton,
} from "../components/forms";
import LogoHeader from "../components/LogoHeader";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";
import { AuthNavigatorParamList } from "../navigation/AuthNavigator";
import routes from "../navigation/routes";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AuthNavigatorParamList, routes.LOGIN>;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const initialLoaded = useBearStore((state) => state.initialLoaded);

  const { login } = useAuthContext();

  const {
    mutate: useLogin,
    isLoading,
    error,
  } = trpc.user.login.useMutation({
    onSettled: (data) => {
      if (!data) return;
      login(data);
    },
    onError: (error_) => {
      throw new Error(error_.message);
    },
  });

  const handleSubmit = async ({ email, password }: LoginCredentials) => {
    Keyboard.dismiss();
    useLogin({
      email,
      password,
    });
  };

  useEffect(() => {
    if (initialLoaded) {
      setTimeout(() => {
        setModalOpen(true);
      }, 0);
    }
  }, [initialLoaded]);

  return (
    <>
      <ActivityIndicator visible={isLoading} />
      <Screen backgroundColor="white" className="p-5">
        <LogoHeader />
        <Text bigText className="my-5 font-bold">
          Login
        </Text>

        <Form
          initialValues={initialForm}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage
            error={error?.message || "Invalid email or password"}
            visible={!!error}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            name="email"
            label="Email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <FormPasswordField
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="password"
            name="password"
            label="Password"
            textContentType="password"
          />
          <View className="items-end">
            <Link
              style={[
                defaultStyles.text,
                {
                  color: colors.primary,
                  marginBottom: 10,
                },
              ]}
              to={
                {
                  screen: routes.RESET_PASSWORD,
                } as any
              }
            >
              Forgot Password
            </Link>
          </View>
          <SubmitButton title="Login" />
        </Form>
      </Screen>
    </>
  );
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Phone Number"),
  password: Yup.string().required().min(4).label("Password"),
});

const initialForm = { email: "", password: "" };
export type LoginCredentials = typeof initialForm;
