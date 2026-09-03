import { Image, Pressable, Text, View } from "react-native";

export default function RegionCard() {
  return (
    <Pressable style={{ backgroundColor: "white", borderRadius: "15px" }}>
      <View style={{ margin: ".5rem" }}>
        <View>
          <Image source={require("../assets/Ahvenanmaa/Ahvenanmaa.png")} />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginTop: ".5rem",
            }}
          >
            Region name
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
