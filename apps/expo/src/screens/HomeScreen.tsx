import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Audio } from "expo-av";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Camera } from "expo-camera";
import * as WebBrowser from "expo-web-browser";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { colors } from "tailwind.config";

import AppImage from "~/components/AppImage";
import AppText from "~/components/AppText";
import { QrScanner } from "~/components/QrScanner";
import SquareItem from "~/components/SquareItem";
import { navigate } from "~/navigation/routeNavigation";
import { useAuthStore, useBearStore } from "~/store";
import { toTitleCase } from "~/utils/toTitleCase";
import { trpc } from "~/utils/trpc";
import authStorage from "../auth/storage";
import { ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import { AppNavigatorParamList } from "../navigation/AppNavigator";
import routes from "../navigation/routes";
import {
  AppointmentStatusChoice,
  AppointmentTypeChoice,
  EducationLevelChoice,
  EducationStreamChoice,
  UserTypeChoice,
} from ".prisma/client";

export default function HomeScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.HOME>;
}) {
  const scrollRef = useRef<KeyboardAwareScrollView>(null);
  const user = useAuthStore((state) => state.user)!;
  const [sound, setSound] = useState<Audio.Sound>();

  const utils = trpc.useUtils();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `Welcome back, ${user.fullName}`,
    });
  }, [user]);

  useEffect(() => {
    (async () => {
      const { sound: soundFile } = await Audio.Sound.createAsync(
        require("../assets/sounds/qr-code-scanned.mp3"),
      );
      setSound(soundFile);
    })();
    return () => {
      sound?.unloadAsync();
    };
  }, []);

  return (
    <Screen
      refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={() => {
            utils.invalidate();
          }}
        />
      }
      noSafeArea
      scrollRef={scrollRef as unknown as RefObject<ScrollView>}
      className="px-5"
    >
      <Services navigation={navigation} />
      <Appointments navigation={navigation} />
      {user.type !== UserTypeChoice.CUSTOMER && (
        <VolunteerScreen navigation={navigation} />
      )}
      {/* <ModelThreeDRendered /> */}
    </Screen>
  );
}

function Appointments({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.HOME>;
}) {
  const user = useAuthStore((state) => state.user)!;
  const { data: appointments, refetch } =
    trpc.appointment.listActive.useQuery();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  return (
    appointments &&
    (appointments.length > 0 || user.type === UserTypeChoice.VOLUNTEER) && (
      <>
        <AppText bigText className="mb-5 font-bold">
          Appointments
        </AppText>
        {appointments.length > 0 ? (
          <View className="flex-row flex-wrap justify-between">
            {appointments.map(({ giver, id, taker, type }) => (
              <TouchableHighlight
                key={id}
                accessibilityRole="button"
                underlayColor="#1775d4"
                onPress={() => {
                  navigation.push(routes.USER_PROFILE, {
                    userId:
                      user.type === UserTypeChoice.CUSTOMER
                        ? giver?.id
                        : taker.id,
                    noBackRoute: false,
                  });
                }}
                className="bg-primary mb-4 min-h-[112] w-[47%] justify-between rounded-xl p-5 pb-2"
              >
                <>
                  <View className="h-10 w-10 items-center justify-center rounded-full">
                    {(
                      user.type === UserTypeChoice.CUSTOMER
                        ? giver?.avatar
                        : taker.avatar
                    ) ? (
                      <AppImage
                        source={{
                          uri: `${
                            user.type === UserTypeChoice.CUSTOMER
                              ? giver?.avatar
                              : taker.avatar
                          }`,
                        }}
                        alt={`${
                          user.type === UserTypeChoice.CUSTOMER
                            ? giver?.fullName
                            : taker.fullName
                        }'s avatar`}
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <Image
                        source={require("../assets/default-avatar.png")}
                        alt={`${
                          user.type === UserTypeChoice.CUSTOMER
                            ? giver?.fullName
                            : taker.fullName
                        }'s avatar`}
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                  </View>
                  <AppText className="mt-2 text-lg font-bold leading-6 text-white">
                    {user.type === UserTypeChoice.CUSTOMER
                      ? giver?.fullName
                      : taker.fullName}
                  </AppText>
                  <AppText className="text-sm leading-6 text-white">
                    {toTitleCase(type)}
                  </AppText>
                </>
              </TouchableHighlight>
            ))}
          </View>
        ) : (
          <AppText className="text-mediumGray mb-4 text-center">
            No active appointments
          </AppText>
        )}
      </>
    )
  );
}

function VolunteerScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.HOME>;
}) {
  const { data: usersRequestingHelp, refetch } =
    trpc.appointment.listNotPaired.useQuery();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  return (
    usersRequestingHelp &&
    usersRequestingHelp.length > 0 && (
      <>
        <AppText bigText className="mb-5 font-bold">
          People requesting assistance
        </AppText>
        <View className="flex-row flex-wrap justify-between">
          {usersRequestingHelp.map(({ id, taker }) => (
            <TouchableHighlight
              key={id}
              accessibilityRole="button"
              underlayColor={colors.highlight}
              onPress={() => {
                navigation.push(routes.USER_PROFILE, {
                  userId: taker.id,
                  noBackRoute: false,
                });
              }}
              className="mb-4 min-h-[112] w-[47%] justify-between rounded-xl bg-white p-5 pb-2"
            >
              <>
                <View className="bg-primary h-10 w-10 items-center justify-center rounded-full">
                  {taker.avatar ? (
                    <AppImage
                      source={{
                        uri: `${taker.avatar}`,
                      }}
                      alt={`${taker.fullName}'s avatar`}
                      className="h-10 w-10 rounded-full"
                    />
                  ) : (
                    <Image
                      source={require("../assets/default-avatar.png")}
                      alt={`${taker.fullName}'s avatar`}
                      className="h-10 w-10 rounded-full"
                    />
                  )}
                </View>
                <AppText className="mt-2 text-lg leading-6">
                  {taker.fullName}
                </AppText>
                <AppText className="text-sm leading-6">Scribe</AppText>
              </>
            </TouchableHighlight>
          ))}
        </View>
      </>
    )
  );
}

function Services({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.HOME>;
}) {
  const user = useAuthStore((state) => state.user)!;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AppText bigText className="my-5 font-bold">
        Services
      </AppText>
      <View className="flex-row flex-wrap justify-between">
        {[
          {
            name: "QR Code Scanner",
            onPress: () => setModalOpen(true),
            iconName: "qrcode-scan",
          },
          ...(user.type === UserTypeChoice.CUSTOMER
            ? [
                {
                  name: "Find Scribe",
                  onPress: () => {
                    navigation.navigate(routes.FIND_SCRIBE);
                  },
                  iconName: "account-search",
                },
              ]
            : []),
        ].map(({ name, onPress, iconName }) => (
          <SquareItem
            key={name}
            name={name}
            onPress={onPress}
            iconName={iconName}
          />
        ))}
      </View>
      <QrScanner modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  );
}
