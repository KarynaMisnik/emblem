import ConsolidatedMunicipalityCard from "@/components/ConsolidatedMunicipalityCard";
import MunicipalityCard from "@/components/MunicipalityCard";
import RegionHeader from "@/components/RegionHeader";
import RegionMap from "@/components/RegionMap";
import { regions } from "@/data/regions";
import { useGridLayout } from "@/utils/grid";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function RegionScreen() {
  const { regionCode } = useLocalSearchParams();
  const region = regions.find((region) => region.regionCode === regionCode);
  const sectionHeight = 350;
  const { gap, padding } = useGridLayout();
  const { width } = useWindowDimensions();
  const isMobile = width < 600;
  const [revealAll, setRevealAll] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: "rgba(0, 0, 0, 0.87)" }}>
      <View style={{ padding: 10, gap: 20 }}>
        {/* RegionHeader: full width */}
        <View
          style={{
            width: "100%",
            height: sectionHeight,
            backgroundColor: "white",
            borderRadius: 8,
          }}
        >
          <RegionHeader
            key={region?.regionCode}
            name={region?.name}
            image={region?.image}
            regionDescription={region?.regionDescription}
          />
        </View>

        {/* Map and municipality grid */}
        <View
          style={{
            flexDirection: isMobile ? "column" : "row",
            alignItems: "stretch",
            gap: 20,
          }}
        >
          {/* Map: left on desktop, top on mobile */}
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
            <RegionMap location={region?.location} />
          </View>

          {/* Municipality cards: right on desktop, below map on mobile */}
          <View
            style={{
              flex: isMobile ? undefined : 2,
              flexDirection: "row",
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
                municipalityCode={municipality.municipalityCode}
              />
            ))}
          </View>
        </View>
      </View>
      <View>
        <View>
          <Text style={{ color: "white" }}>Former municipalities</Text>
          <Text style={{ color: "white" }}>
            Municipalities that have been merged, renamed, or otherwise ceased
            to exist as independent municipalities.
          </Text>
        </View>
        <View>
          <View style={{ alignItems: "flex-end", marginRight: padding }}>
            <Pressable
              onPress={() => setRevealAll(!revealAll)}
              style={{
                backgroundColor: "white",
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 14, color: "black" }}>
                {revealAll ? "Hide colors" : "Reveal all"}
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: gap,
              padding: padding,
            }}
          >
            {region?.consolidated.map((consolidated) => (
              <ConsolidatedMunicipalityCard
                key={consolidated.id}
                image={consolidated.url}
                name={consolidated.oldName}
                revealAll={revealAll}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
