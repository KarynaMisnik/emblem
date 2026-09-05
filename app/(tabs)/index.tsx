import RegionCard from "@/components/RegionCard";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.87)",
      }}
    >
      <RegionCard
        name="Uusimaa"
        image={require("@/assets/Uusimaa/Uusimaa.png")}
      ></RegionCard>
    </View>
  );
}
