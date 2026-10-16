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
    <View
      style={{
        width: cardWidth,
        backgroundColor: "white",
        borderRadius: 15,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={municipality.url}
          style={{
            width: cardWidth * 0.9,
            height: cardWidth * 0.9,
            resizeMode: "contain",
            marginTop: 10,
          }}
        />

        <Text
          style={{
            color: "black",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
            margin: 8,
          }}
        >
          {municipality.municipality}
        </Text>
      </View>
    </View>
  );
}
