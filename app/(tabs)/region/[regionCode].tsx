import { regions } from "@/data/regions";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function RegionScreen() {
  const { regionCode } = useLocalSearchParams();
  const region = regions.find((region) => region.regionCode === regionCode);

  return (
    <View>
      <Text>{region?.name}</Text>
    </View>
  );
}
