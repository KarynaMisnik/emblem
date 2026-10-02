import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

export default function MunicipalityCard({ name, code, image }) {
  const { width } = useWindowDimensions();
  const gap = 20;
  const padding = 20;
  const columns = width >= 1200 ? 5 : width >= 600 ? 3 : width >= 500 ? 2 : 1;
  const availableWidth = width - padding * 2;

  const cardWidth = (availableWidth - gap * (columns - 1)) / columns;
  return (
    <Pressable
      style={{ width: cardWidth, backgroundColor: "white", borderRadius: 15 }}
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
