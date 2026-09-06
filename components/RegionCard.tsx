import { Image, Pressable, Text, View } from "react-native";

export default function RegionCard({ name, image }) {
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
            style={{ width: 200, height: 200, resizeMode: "contain" }}
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
