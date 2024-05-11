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
import { UserTypeChoice } from ".prisma/client";

export default function FindScribeScreen({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamList,
    routes.FIND_SCRIBE
  >;
  route: RouteProp<AppNavigatorParamList, routes.FIND_SCRIBE>;
}) {
  const utils = trpc.useUtils();

  const isLoading = false;

  const [datesWithTime, setDatesWithTime] = useState<
    {
      date: Date;
      startTime: string;
      endTime: string;
    }[]
  >([]);

  const handleSubmit = async (input: {
    [K in keyof FormValues]: NonNullable<FormValues[K]>;
  }) => {
    Keyboard.dismiss();
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
          <FormContent
            datesWithTime={datesWithTime}
            setDatesWithTime={setDatesWithTime}
          />
        </Form>
      </Screen>
    </>
  );
}

function FormContent({
  datesWithTime,
  setDatesWithTime,
}: {
  datesWithTime: {
    date: Date;
    startTime: string;
    endTime: string;
  }[];
  setDatesWithTime: React.Dispatch<
    React.SetStateAction<
      {
        date: Date;
        startTime: string;
        endTime: string;
      }[]
    >
  >;
}) {
  const [numberOfDates, setNumberOfDates] = useState(1);

  useEffect(() => {
    setDatesWithTime(
      (
        datesWithTime: {
          date: Date;
          startTime: string;
          endTime: string;
        }[],
      ) => {
        const newDatesWithTime = [...datesWithTime];
        while (newDatesWithTime.length < numberOfDates) {
          newDatesWithTime.push({
            date: new Date(),
            startTime: "00:00",
            endTime: "00:00",
          });
        }
        while (newDatesWithTime.length > numberOfDates) {
          newDatesWithTime.pop();
        }
        return newDatesWithTime;
      },
    );
  }, [numberOfDates]);

  return (
    <>
      <FormField
        autoCapitalize="words"
        name="examCenterOrFieldLocation"
        label="Exam Center or Field Location"
        keyboardType="default"
      />
      <FormCheckBox name="sameAsMyGender" label="Same as my gender" />

      {datesWithTime.map((dateWithTime, index) => (
        <View key={index}>
          <AppText className="mx-3 mt-2 text-lg font-bold">
            Day {index + 1}
          </AppText>
          <AppDatePickerInline
            date={dateWithTime.date}
            label="Day 1 Date"
            maximumDate={undefined}
            minimumDate={new Date()}
            onDateChange={(newDate) => {
              setDatesWithTime(
                (
                  datesWithTime: {
                    date: Date;
                    startTime: string;
                    endTime: string;
                  }[],
                ) => {
                  const newDatesWithTime = [...datesWithTime];
                  newDatesWithTime[index].date = newDate;
                  return newDatesWithTime;
                },
              );
            }}
            placeholder="Day 1 Date"
          />
          <AppDatePickerInline
            date={
              new Date(
                new Date().setHours(
                  parseInt(dateWithTime.startTime.split(":")[0]),
                  parseInt(dateWithTime.startTime.split(":")[1]),
                ),
              )
            }
            label="Day 1 Start Time"
            maximumDate={undefined}
            minimumDate={new Date()}
            onDateChange={(newDate) => {
              setDatesWithTime(
                (
                  datesWithTime: {
                    date: Date;
                    startTime: string;
                    endTime: string;
                  }[],
                ) => {
                  const newDatesWithTime = [...datesWithTime];
                  newDatesWithTime[
                    index
                  ].startTime = `${newDate.getHours()}:${newDate.getMinutes()}`;
                  return newDatesWithTime;
                },
              );
            }}
            placeholder="Day 1 Start Time"
            time
          />
          <AppDatePickerInline
            date={
              new Date(
                new Date().setHours(
                  parseInt(dateWithTime.endTime.split(":")[0]),
                  parseInt(dateWithTime.endTime.split(":")[1]),
                ),
              )
            }
            label="Day 1 End Time"
            maximumDate={undefined}
            minimumDate={new Date()}
            onDateChange={(newDate) => {
              setDatesWithTime(
                (
                  datesWithTime: {
                    date: Date;
                    startTime: string;
                    endTime: string;
                  }[],
                ) => {
                  const newDatesWithTime = [...datesWithTime];
                  newDatesWithTime[
                    index
                  ].endTime = `${newDate.getHours()}:${newDate.getMinutes()}`;
                  return newDatesWithTime;
                },
              );
            }}
            placeholder="Day 1 End Time"
            time
          />
        </View>
      ))}
      <FormCheckBox
        name="willGiveFoodProvisions"
        label="Will Give Food Provision"
      />
      <FormCheckBox
        name="willGiveTransportation"
        label="Will Provide Transportation Fare"
      />

      <FormField name="remarks" label="Remarks" keyboardType="default" />
      <SubmitButton title="Find Scribe" />
    </>
  );
}

const validationSchema = Yup.object().shape({
  examCenterOrFieldLocation: Yup.string()
    .required()
    .label("Exam Center or Field Location"),
  sameAsMyGender: Yup.boolean().required().label("Same as my gender"),
  willGiveFoodProvisions: Yup.boolean()
    .required()
    .label("Will Give Food Provision"),
  willGiveTransportation: Yup.boolean()
    .required()
    .label("Will Provide Transportation Fare"),
  educationLevel: Yup.string().nullable().label("Education Level"),
  educationStream: Yup.string().nullable().label("Education Stream"),
  remarks: Yup.string().label("Remarks"),
  datesWithTime: Yup.array()
    .of(
      Yup.object().shape({
        date: Yup.date().required(),
        startTime: Yup.string().required(),
        endTime: Yup.string().required(),
      }),
    )
    .label("Dates with Time"),
});

const formInitialValues: FormValues = {
  examCenterOrFieldLocation: "",
  sameAsMyGender: false,
  willGiveFoodProvisions: true,
  willGiveTransportation: true,
  remarks: "",
  datesWithTime: [],
};

type FormValues = {
  examCenterOrFieldLocation: string;
  sameAsMyGender: boolean;
  willGiveFoodProvisions: boolean;
  willGiveTransportation: boolean;
  remarks: string;
  datesWithTime: {
    date: Date;
    startTime: string;
    endTime: string;
  }[];
};
