import MunicipalityCard from "@/components/MunicipalityCard";
import RegionHeader from "@/components/RegionHeader";
import RegionMap from "@/components/RegionMap";
import { regions } from "@/data/regions";
import { useGridLayout } from "@/utils/grid";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

export default function RegionScreen() {
  const { regionCode } = useLocalSearchParams();
  const region = regions.find((region) => region.regionCode === regionCode);
  const sectionHeight = 350;
  const { gap, padding } = useGridLayout();

  return (
    <ScrollView style={{ backgroundColor: "rgba(0, 0, 0, 0.87)" }}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            height: sectionHeight,
            margin: 10,
            backgroundColor: "white",
            borderRadius: 8,
          }}
        >
          <RegionHeader
            key={region?.regionCode}
            name={region?.name}
            image={region?.image}
            regionDescription={region?.regionDescription}
          ></RegionHeader>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: "center",
            height: sectionHeight,
            margin: 10,
            backgroundColor: "white",
            borderRadius: 8,
          }}
        >
          <RegionMap location={region?.location}></RegionMap>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: gap,
          padding: padding,
        }}
      >
        {region?.municipalities.map((municipality) => (
          <MunicipalityCard
            key={municipality.municipalityCode}
            image={municipality.url}
            name={municipality.municipality}
          />
        ))}
      </View>
    </ScrollView>
  );
}
