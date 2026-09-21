import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RegionScreen() {
  const { regionCode } = useLocalSearchParams();

  return (
    <View>
      <Text>{regionCode}</Text>
    </View>
  );
}
