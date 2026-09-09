import { Image, Pressable, Text, View } from "react-native";

export default function RegionCard({ name, image, cardWidth }) {
  return (
    <Pressable
      style={{
        width: cardWidth,
        backgroundColor: "white",
        borderRadius: 15,
      }}
    >
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={image}
            style={{
              width: cardWidth * 0.9,
              height: cardWidth * 0.9,
              resizeMode: "contain",
              marginTop: 10,
            }}
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
              height: 60,
              margin: 8,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
