import { regions } from "@/data/regions";
import { useGridLayout } from "@/utils/grid";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";

export default function MunicipalityPage() {
  const { municipalityCode } = useLocalSearchParams<{
    municipalityCode: string;
  }>();

  const { cardWidth } = useGridLayout();

  const municipality = regions
    .flatMap((region) => region.municipalities)
    .find((municipality) => municipality.municipalityCode === municipalityCode);

  if (!municipality) {
    return (
      <View>
        <Text>Municipality not found</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={{ flexDirection: "row", margin: 8 }}>
        <Image
          source={municipality.url}
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
          }}
        />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            height: 60,
            margin: 8,
          }}
        >
          {municipality.municipality}
        </Text>
      </View>
      <Text style={{ margin: 8 }}>{municipality.municipalityDescription}</Text>
    </View>
  );
}
