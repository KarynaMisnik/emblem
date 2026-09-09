import RegionCard from "@/components/RegionCard";
import { regions } from "@/data/regions";
import { FlatList, useWindowDimensions } from "react-native";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const columns = width >= 1200 ? 4 : width >= 700 ? 3 : width >= 600 ? 2 : 1;
  const imageSize = width >= 1200 ? 180 : width >= 700 ? 160 : 150;
  return (
    <FlatList
      data={regions}
      numColumns={columns}
      columnWrapperStyle={
        columns > 1 ? { justifyContent: "space-evenly" } : undefined
      }
      contentContainerStyle={{
        padding: 20,
      }}
      renderItem={({ item }) => (
        <RegionCard name={item.name} image={item.image} imageSize={imageSize} />
      )}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.87)",
      }}
    ></FlatList>
  );
}
