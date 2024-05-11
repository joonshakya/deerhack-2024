import { ReactNode } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "tailwind.config";

import { Item } from "./AppNativePicker";
import AppPickerCustom from "./AppPickerCustom";
import AppText from "./AppText";

export default function AppListMenuPicker({
  label,
  items,
  onItemSelect,
  selectedItem,
  children,
  className,
  style,
  noPlaceholder,
}: {
  label: string;
  items: Item[];
  onItemSelect: (item: Item) => void;
  selectedItem: string;
  children?: ReactNode;
  className?: string;
  style?: Object;
  noPlaceholder?: boolean;
}) {
  const handleItemSelect = (value: string) => {
    onItemSelect(items.find((item) => item.value === value) || items[0]);
  };

  return (
    <View className={className} style={style}>
      <View accessibilityHint="Click to open the picker">
        <AppPickerCustom
          pickerProps={{ mode: "dropdown" }}
          // useNativeAndroidPickerStyle
          value={selectedItem}
          onValueChange={handleItemSelect}
          items={items}
          placeholder={noPlaceholder ? {} : undefined}
        >
          <View className="flex-row items-center px-5 py-3">
            {children || (
              <>
                <AppText className="mr-2 flex-1 text-base">
                  {label || "Select an item"}
                </AppText>
                <AppText className="text-mediumGray text-base">
                  {items.find((item) => item.value === selectedItem)?.label}{" "}
                </AppText>
              </>
            )}
            <View className="ml-1">
              <MaterialCommunityIcons
                color={colors.mediumGray}
                name="chevron-down"
                size={20}
              />
            </View>
          </View>
        </AppPickerCustom>
      </View>
    </View>
  );
}
