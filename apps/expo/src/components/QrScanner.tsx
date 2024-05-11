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

import AppText from "~/components/AppText";
import { navigate } from "~/navigation/routeNavigation";
import routes from "../navigation/routes";

export function QrScanner({
  modalOpen,
  setModalOpen,
  toRoomId,
}: {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  toRoomId?: string;
}) {
  const [sound, setSound] = useState<Audio.Sound>();
  const [modalOpenDelay, setModalOpenDelay] = useState(false);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  useEffect(() => {
    if (modalOpen) {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      };
      getBarCodeScannerPermissions();
      setTimeout(() => {
        setModalOpenDelay(true);
      }, 0);
    } else {
      setModalOpenDelay(false);
    }
  }, [modalOpen]);

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

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    const slug = data.split("/").pop();
    if (slug) {
      sound?.replayAsync();
      setModalOpen(false);
      navigate(routes.THREE_D_SCANNER_MODEL_DETAILS, {
        slug,
      });
    }
  };

  return (
    <Modal
      onAccessibilityTap={() => setModalOpen(false)}
      accessibilityHint="Scan a QR code to proceed"
      visible={modalOpen}
      collapsable
      onRequestClose={() => setModalOpen(false)}
      presentationStyle="pageSheet"
      animationType="slide"
    >
      <View className="flex-1 bg-black">
        <AppText className={!hasPermission ? "text-white" : ""}>
          {(() => {
            if (hasPermission === null) {
              return "Requesting for camera permission";
            }
            if (hasPermission === false) {
              return "No access to camera";
            }
            return "Scanning QR code";
          })()}
        </AppText>
        {modalOpenDelay && hasPermission && (
          <Camera
            style={[StyleSheet.absoluteFill]}
            ratio="16:9"
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            onBarCodeScanned={handleBarCodeScanned}
          />
        )}
        <Image
          className="absolute left-0 top-0 h-full w-full"
          source={require("../assets/qr-scanner.png")}
          resizeMode="cover"
        />
        <View className="items-end">
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Close"
            className="mr-4 h-12 w-12 items-center justify-center rounded-full bg-[#00000055]"
          >
            <MaterialCommunityIcons
              name="close"
              size={24}
              color="white"
              onPress={() => setModalOpen(false)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
