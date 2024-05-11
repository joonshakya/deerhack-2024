import { useEffect, useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  TouchableHighlight,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useAuthContext } from "~/auth/context";
import useLocalAuthentication from "~/hooks/useLocalAuthentication";
import { useAuthStore, useBearStore } from "~/store";
import { trpc } from "~/utils/trpc";
import { UserTypeChoice } from "../../../prisma-generated";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import { navigateBack } from "../navigation/routeNavigation";
import routes from "../navigation/routes";

export default function QrInfoScreen({
  route,
  navigation,
}: {
  route: RouteProp<AppNavigatorParamList, routes.QR_INFO>;
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.QR_INFO>;
}) {
  const { id, invalidate, categoryId } = route.params;
  const { authenticate } = useLocalAuthentication();

  const utils = trpc.useUtils();

  const { data, isLoading } = trpc.track.getFromResponseId.useQuery(
    {
      responseId: id,
      categoryId,
    },
    {
      enabled: !!categoryId,
    },
  );
  const { data: response, isLoading: responseLoading } =
    trpc.response.get.useQuery({
      id,
    });

  const { mutate: invalidateQr } = trpc.track.invalidate.useMutation({});

  useEffect(() => {
    if (data) {
      invalidateQr({
        categoryId,
        responseId: data.responseId,
      });
    }
  }, [data]);

  const userRole = useBearStore((state) => state.userRole);

  const { data: linkedIn } = trpc.response.getLinkedIn.useQuery(
    { id },
    {
      enabled: userRole === "PARTICIPANT",
    },
  );

  useEffect(() => {
    if (linkedIn && userRole === "PARTICIPANT") {
      Linking.openURL(linkedIn);
      utils.user.getNetworkingScore.invalidate();
    }
  }, [linkedIn, userRole]);

  const { mutate: validateTrack } = trpc.track.validate.useMutation({
    onSuccess: () => {
      Alert.alert("Success", "User marked as unused", [
        {
          text: "Ok",
          onPress() {
            navigateBack();
          },
        },
      ]);
    },
  });

  return !!categoryId ? (
    <>
      <ActivityIndicator visible={isLoading} />
      <Screen noSafeArea className="flex-1 px-5">
        <View className="my-10 items-center">
          <AppText className="mb-8 text-3xl font-bold">
            {data?.response?.fullName}
          </AppText>
        </View>
        <View className="items-stretch overflow-hidden rounded-xl">
          <AppText
            className={`p-8 text-center text-2xl font-bold text-white  ${
              data?.scannedAt ? "bg-[#DB4646]" : "bg-[#019139]"
            }`}
          >
            {data?.scannedAt ? "Already Scanned" : "Valid"}
          </AppText>
        </View>
        <View className="my-10 items-center">
          {data?.scannedAt ? (
            <>
              <AppText className="pt-8 text-center text-2xl font-bold">
                Ticket Scanned At:
              </AppText>
              <AppText className="text-center text-2xl font-bold ">
                {new Date(data?.scannedAt).toLocaleString()}
              </AppText>
            </>
          ) : null}
        </View>
      </Screen>
      {data?.scannedAt && !invalidate ? (
        <View className="bg-white px-5 pb-4">
          <AppButton
            onPress={async () => {
              const authed = await authenticate();
              if (!authed) {
                return;
              }
              validateTrack({ id });
            }}
            title="Mark as unused"
          />
        </View>
      ) : null}
    </>
  ) : (
    <>
      <ActivityIndicator visible={responseLoading} />
      <Screen noSafeArea className="flex-1 px-5">
        <View className="my-10 items-center">
          <AppText className="mb-8 text-3xl font-bold">
            {response?.fullName}
          </AppText>
        </View>
        <View>
          <AppText className="text-2xl font-bold">{response?.email}</AppText>
          <AppText className="text-2xl font-bold">{response?.phone}</AppText>
          <Pressable
            onPress={() => {
              response?.linkedIn && Linking.openURL(response?.linkedIn);
            }}
          >
            <AppText className="text-2xl font-bold text-blue-500">
              LinkedIn
            </AppText>
          </Pressable>
        </View>
      </Screen>
    </>
  );
}
