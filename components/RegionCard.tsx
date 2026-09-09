import { Image, Pressable, Text, View } from "react-native";

export default function RegionCard({ name, image, imageSize }) {
  return (
    <Pressable
      style={{
        backgroundColor: "white",
        borderRadius: 15,
        marginBottom: 20,
      }}
    >
      <View>
        <View>
          <Image
            source={image}
            style={{
              width: imageSize,
              height: imageSize,
              resizeMode: "contain",
            }}
          />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 8,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
