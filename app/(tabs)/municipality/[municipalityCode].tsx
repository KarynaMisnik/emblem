import { regions } from "@/data/regions";
import { useGridLayout } from "@/utils/grid";
import { useLocalSearchParams } from "expo-router";
import { Image, Text, View, useWindowDimensions } from "react-native";

export default function MunicipalityPage() {
  const { municipalityCode } = useLocalSearchParams<{
    municipalityCode: string;
  }>();

  const { cardWidth } = useGridLayout();
  const { width } = useWindowDimensions();
  const { gap, padding } = useGridLayout();

  const isMobile = width < 600;
  const sectionHeight = 350;

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
      <View
        style={{
          flexDirection: isMobile ? "column" : "row",
          alignItems: "stretch",
          gap: 20,
        }}
      >
        <View
          style={{
            width: isMobile ? "100%" : undefined,
            flex: isMobile ? undefined : 1,
            height: isMobile ? sectionHeight : undefined,
            borderRadius: 8,
            alignItems: "center",
            backgroundColor: "white",
            padding: 20,
          }}
        >
          Weather info
        </View>

        <View
          style={{
            flex: isMobile ? undefined : 2,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: gap,
            padding: padding,
          }}
        >
          Map location info
        </View>
      </View>
    </View>
  );
}
