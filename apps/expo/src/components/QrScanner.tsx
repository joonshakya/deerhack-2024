import { useEffect, useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from "expo-av";
import { CameraView, useCameraPermissions } from "expo-camera";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { trpc } from "~/utils/trpc";
import { navigate } from "../navigation/routeNavigation";
import routes from "../navigation/routes";
import AppText from "./AppText";

export function QrScanner({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}) {
  const [sound, setSound] = useState<Audio.Sound>();
  const [modalOpenDelay, setModalOpenDelay] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();

  const { data } = trpc.event.list.useQuery();

  const { mutate } = trpc.response.create.useMutation({});

  useEffect(() => {
    mutate({
      email: "joonshakya07@gmail.com",
      fullName: "Joon Shakya",
      linkedIn: "https://www.linkedin.com/in/joon-shakya-7b1b3b1b3/",
      phone: "9841234567",
      eventId: "clw1tvn2n0006kmnibe18su2a",
      message: "Hello World",
    });
  }, []);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  useEffect(() => {
    if (modalOpen) {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await requestPermission();
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

  const regex = /'ID'\s*:\s*'(\w{8}-\w{4}-\w{4}-\w{4}-\w{12})'/;

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setModalOpen(false);
    const match = data.match(regex);
    if (match) {
      const uuid = match[1];
      sound?.replayAsync();
      navigate(routes.QR_INFO, {
        id: uuid,
        invalidate: true,
      });
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
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
          <CameraView
            style={[StyleSheet.absoluteFill]}
            focusable
            barcodeScannerSettings={{
              barcodeTypes: ["qr"],
            }}
            onBarcodeScanned={handleBarCodeScanned}
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
