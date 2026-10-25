import { Image, View } from "react-native";

export default function RegionMap({ location }) {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
      }}
    >
      <Image
        source={location}
        style={{
          flex: 1,
          width: "100%",
          resizeMode: "contain",
        }}
      />
    </View>
  );
}
