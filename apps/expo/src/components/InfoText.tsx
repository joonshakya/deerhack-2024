import { Text } from "react-native";

export default function InfoText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: any;
}) {
  return (
    <Text
      className={`text-center text-base leading-6 text-neutral-500 ${className}`}
      style={style}
    >
      {text}
    </Text>
  );
}
