import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFormikContext } from "formik";
import { colors } from "tailwind.config";
import * as Yup from "yup";

import AppDatePickerInline from "~/components/AppDatePickerInline";
import AppText from "~/components/AppText";
import { trpc } from "~/utils/trpc";
import ActivityIndicator from "../components/ActivityIndicator";
import {
  ErrorMessage,
  Form,
  FormCheckBox,
  FormField,
  SubmitButton,
} from "../components/forms";
import FormNativePicker from "../components/forms/FormNativePicker";
import Screen from "../components/Screen";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import routes from "../navigation/routes";
import { toTitleCase } from "../utils/toTitleCase";
import { Category, UserTypeChoice } from ".prisma/client";

export default function EventCreateScreen({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamList,
    routes.CREATE_EVENT
  >;
  route: RouteProp<AppNavigatorParamList, routes.CREATE_EVENT>;
}) {
  const utils = trpc.useUtils();

  const { mutate } = trpc.event.create.useMutation({
    onError: (error) => {
      Alert.alert("Error", error.message);
    },
    onSuccess: (data) => {
      Alert.alert("Success", "Event created successfully");
      navigation.navigate(routes.HOME);
      utils.invalidate();
    },
  });

  const isLoading = false;

  const handleSubmit = async (input: {
    [K in keyof FormValues]: NonNullable<FormValues[K]>;
  }) => {
    Keyboard.dismiss();
    console.log({
      input,
    });
    mutate({
      ...input,
      date: new Date(input.date),
      registrationPrice: Number(input.registrationPrice),
    });
  };

  return (
    <>
      <ActivityIndicator visible={isLoading} />
      <Screen backgroundColor="white" className="px-5 py-2 pb-10" noSafeArea>
        <Form
          initialValues={formInitialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {/* <ErrorMessage
            error={error?.message || "Invalid phone or password"}
            visible={!!error}
          /> */}
          <FormContent />
        </Form>
      </Screen>
    </>
  );
}

function FormContent() {
  const { errors } = useFormikContext<FormValues>();
  console.log(errors);
  return (
    <>
      <FormField name="title" label="Event Title" />
      <FormField name="description" label="Description" multiline />
      <FormNativePicker
        items={[
          ...Object.values(Category).map((value) => ({
            value,
            label: toTitleCase(value),
          })),
        ]}
        name="category"
        label="Category"
      />
      <FormField name="date" label="Date" />
      <FormField name="time" label="Time" />

      <FormCheckBox name="paymentScreenshotNeeded" label="Payment Screenshot" />
      <FormField name="registrationPrice" label="Registration Price" />
      <FormField name="venue" label="Venue" />

      <SubmitButton title="Create" />
    </>
  );
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  description: Yup.string().required().label("Description"),
  category: Yup.string()
    .required()
    .oneOf(Object.values(Category), "Invalid Category")
    .label("Category"),
  date: Yup.string().required().label("Date"),
  time: Yup.string().required().label("Time"),
  venue: Yup.string().required().label("Venue"),
  paymentScreenshotNeeded: Yup.boolean()
    .required()
    .label("Payment Screenshot Needed"),
  registrationRequirements: Yup.array()
    .of(Yup.string())
    .label("Registration Requirements"),
  registrationPrice: Yup.number().required().label("Registration Price"),
});

const formInitialValues: FormValues = {
  title: "",
  description: "",
  category: Category.COMMUNITY,
  image: "",
  date: "",
  time: "",
  venue: "",
  paymentScreenshotNeeded: false,
  registrationRequirements: [],
  registrationPrice: 0,
};

type FormValues = {
  title: string;
  description: string;
  category: Category;
  image: string;
  date: string;
  time: string;
  venue: string;
  paymentScreenshotNeeded: boolean;
  registrationRequirements: string[];
  registrationPrice: number;
};
