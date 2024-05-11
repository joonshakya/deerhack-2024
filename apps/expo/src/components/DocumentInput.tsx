import { Alert, TouchableOpacity, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "tailwind.config";

import AppText from "./AppText";
// import { storageDomain } from "../config/settings";
import { DocumentAssetOrString } from "./forms/FormPdfPicker";

export default function DocumentInput({
  onDocumentChange,
  documentAsset,
  fullWidth,
}: {
  onDocumentChange: (documentAssets: DocumentAssetOrString[]) => void;
  documentAsset?: DocumentAssetOrString;
  fullWidth?: boolean;
}) {
  const handlePress = () => {
    if (!documentAsset) handleDocumentSelect();
    else
      Alert.alert("Delete?", "Are you sure you want to remove this file?", [
        { text: "Yes", onPress: () => onDocumentChange([]) },
        { text: "No" },
      ]);
  };

  const handleDocumentSelect = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        multiple: true,
      });
      if (!result.canceled) onDocumentChange(result.assets);
    } catch (error) {
      throw new Error("Error reading the image", error as any);
    }
  };
  const content = documentAsset ? (
    <View className="items-center justify-center p-4">
      <MaterialCommunityIcons
        color={colors.mediumGray}
        name="file-document"
        size={40}
      />
      <AppText className="mt-2 text-center">
        {typeof documentAsset !== "string"
          ? documentAsset[0].name
          : documentAsset}
      </AppText>
    </View>
  ) : (
    <MaterialCommunityIcons color={colors.mediumGray} name="plus" size={40} />
  );
  return (
    <TouchableOpacity
      className={`h-28 ${
        fullWidth ? "w-full" : "w-32"
      } bg-lightGray items-center justify-center overflow-hidden rounded-xl`}
      onPress={handlePress}
    >
      {content}
    </TouchableOpacity>
  );
}
