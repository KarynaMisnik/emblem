import { Image, Text, View } from "react-native";

export default function RegionScreen({ name, image, regionDescription }) {
  return (
    <View>
      <View style={{ flexDirection: "row", margin: 8 }}>
        <Image
          source={image}
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
          {name}
        </Text>
      </View>
      <Text style={{ margin: 8 }}>{regionDescription}</Text>
    </View>
  );
}
