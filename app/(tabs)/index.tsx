import RegionCard from "@/components/RegionCard";
import { regions } from "@/data/regions";
import { ScrollView, View, useWindowDimensions } from "react-native";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const gap = 20;
  const padding = 20;
  const columns = width >= 1200 ? 5 : width >= 600 ? 3 : width >= 500 ? 2 : 1;
  const availableWidth = width - padding * 2;

  const cardWidth = (availableWidth - gap * (columns - 1)) / columns;

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
          />
        ))}
      </View>
    </ScrollView>
  );
}
