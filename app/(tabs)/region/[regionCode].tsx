import { regions } from "@/data/regions";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";

export default function RegionScreen() {
  const { regionCode } = useLocalSearchParams();
  const region = regions.find((region) => region.regionCode === regionCode);

  return (
    <ScrollView style={{ backgroundColor: "rgba(0, 0, 0, 0.87)" }}>
      <View
        style={{
          margin: 10,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", margin: 8 }}>
          <Image
            source={region?.image}
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
            {region?.name}
          </Text>
        </View>
        <Text style={{ margin: 8 }}>{region?.blazon}</Text>
      </View>
      <View>
        <Image source={region?.location} />
      </View>
    </ScrollView>
  );
}
