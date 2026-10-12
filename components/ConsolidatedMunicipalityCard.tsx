import { useGridLayout } from "@/utils/grid";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function ConsolidatedMunicipalityCard({ name, code, image }) {
  const { cardWidth } = useGridLayout();
  const [flipped, setFlipped] = useState(false);

  return (
    <Pressable
      onPress={() => setFlipped((previous) => !previous)}
      style={{
        width: cardWidth,
        height: cardWidth + 80,
        backgroundColor: flipped ? "#777" : "white",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!flipped ? (
        // Front: gray placeholder shown initially
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            backgroundColor: "#777",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Consolidated</Text>
        </View>
      ) : (
        // Back: reveal the actual municipality
        <View style={{ alignItems: "center" }}>
          <Image
            source={image}
            style={{
              width: cardWidth * 0.9,
              height: cardWidth * 0.9,
              resizeMode: "contain",
              marginTop: 10,
            }}
          />

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
      )}
    </Pressable>
  );
}
