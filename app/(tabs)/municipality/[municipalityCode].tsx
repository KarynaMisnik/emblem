import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function MunicipalityPage() {
  const { municipalityCode } = useLocalSearchParams<{
    municipalityCode: string;
  }>();

  return (
    <View>
      <Text>Municipality code: {municipalityCode}</Text>
    </View>
  );
}
