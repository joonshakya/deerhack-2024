import { useEffect } from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import { colors } from "tailwind.config";

export default function UploadScreen({
  onDone,
  progress = 0,
  visible = false,
}: {
  onDone: (isCanceled: boolean) => void;
  progress: number;
  visible: boolean;
}) {
  useEffect(() => {
    setTimeout(() => {
      if (progress >= 1) {
        onDone(false);
      }
    }, 750);
  }, [visible, progress]);
  return (
    <Modal visible={visible} animationType="slide">
      <View className="flex-1 items-center justify-center">
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            // onAnimationFinish={onDone}
            progress={1}
            loop={false}
            // autoPlay
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: { width: 150 },
});
