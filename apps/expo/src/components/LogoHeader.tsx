import { Image, View } from "react-native";

export default function LogoHeader({
  className,
  style,
}: {
  className?: string;
  style?: any;
}) {
  return (
    <View
      style={style}
      className={`items-center before:justify-center ${className}`}
    ></View>
  );
}
