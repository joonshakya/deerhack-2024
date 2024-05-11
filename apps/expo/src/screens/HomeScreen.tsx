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
import InfoText from "~/components/InfoText";
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
import { UserTypeChoice } from ".prisma/client";

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
      headerTitle: `Hi, ${user.fullName}`,
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

      {/* <ModelThreeDRendered /> */}
    </Screen>
  );
}

function Services({
  navigation,
}: {
  navigation: NativeStackNavigationProp<AppNavigatorParamList, routes.HOME>;
}) {
  const user = useAuthStore((state) => state.user)!;

  const { data, isLoading, refetch } = trpc.event.list.useQuery();

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AppText bigText className="my-4 font-bold">
        My events
      </AppText>

      {data?.length === 0 && (
        <InfoText text="No events found. Create one now!" />
      )}
      <View className="flex-row flex-wrap">
        {data?.map(({ title, id, image }) => (
          <TouchableOpacity
            key={id}
            accessibilityRole="button"
            onPress={() => {
              navigation.navigate(routes.CREATE_EVENT, {
                eventId: id,
              });
            }}
            className="w-[50%] p-2"
          >
            <>
              <View className="mb-2 justify-between rounded-xl bg-white">
                <Image
                  className="h-[180] w-full rounded-xl"
                  source={{
                    uri: "https://www.joon.com.np/Joon.png",
                  }}
                  height={10}
                  width={10}
                />
              </View>
              <AppText className="mt-2 text-center text-lg leading-6">
                {title}
              </AppText>
            </>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}
