import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
  name: "Karya",
  slug: "karya",
  scheme: "karya",
  version: "1.2.1",
  orientation: "portrait",
  icon: "./src/assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./src/assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#fff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
    url: "https://u.expo.dev/f87f4ef6-e58a-4ac1-a985-6eb6d118a003",
  },
  runtimeVersion: {
    policy: "sdkVersion",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.karya.app",
    infoPlist: {
      NSCameraUsageDescription: "Allow $(PRODUCT_NAME) to access camera.",
      NSMicrophoneUsageDescription:
        "Allow $(PRODUCT_NAME) to access your microphone",
    },
    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    versionCode: 14,

    adaptiveIcon: {
      foregroundImage: "./src/assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: "com.karya.app",
    permissions: ["android.permission.CAMERA"],
  },
  extra: {
    eas: {
      projectId: "f87f4ef6-e58a-4ac1-a985-6eb6d118a003",
    },
  },
  experiments: {
    tsconfigPaths: true,
  },
  plugins: [
    [
      "expo-camera",
      {
        cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
        microphonePermission: "Allow $(PRODUCT_NAME) to access your microphone",
        recordAudioAndroid: true,
      },
    ],
    "expo-secure-store",
    [
      "expo-barcode-scanner",
      {
        cameraPermission: "Allow $(PRODUCT_NAME) to access camera.",
      },
    ],
    [
      "expo-build-properties",
      {
        android: {
          enableProguardInReleaseBuilds: true,
          compileSdkVersion: 33,
          targetSdkVersion: 33,
          minSdkVersion: 23,
          buildToolsVersion: "33.0.0",
          kotlinVersion: "1.6.20",
        },
      },
    ],
    [
      "expo-updates",
      {
        username: "joonshakya",
      },
    ],
    "./expo-plugins/with-modify-gradle.js",
    "./expo-plugins/withAndroidVerifiedLinksWorkaround",
  ],
});

export default defineConfig;
