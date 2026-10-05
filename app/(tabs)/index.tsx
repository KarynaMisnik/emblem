import RegionCard from "@/components/RegionCard";
import { regions } from "@/data/regions";
import { useGridLayout } from "@/utils/grid";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const { gap, padding, cardWidth } = useGridLayout();
  return (
    <ScrollView
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.87)",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: gap,
          padding: padding,
        }}
      >
        {regions.map((region) => (
          <RegionCard
            name={region.name}
            image={region.image}
            cardWidth={cardWidth}
            regionCode={region.regionCode}
          />
        ))}
      </View>
    </ScrollView>
  );
}
