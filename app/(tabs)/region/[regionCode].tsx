import RegionHeader from "@/components/RegionHeader";
import RegionMap from "@/components/RegionMap";
import { regions } from "@/data/regions";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";

export default function RegionScreen() {
  const { regionCode } = useLocalSearchParams();
  const region = regions.find((region) => region.regionCode === regionCode);
  const sectionHeight = 350;

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
            name={region?.name}
            image={region?.image}
            blazon={region?.blazon}
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
    </ScrollView>
  );
}
