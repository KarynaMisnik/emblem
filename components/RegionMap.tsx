import { Image, View } from "react-native";

export default function RegionMap({ location }) {
  return (
    <View>
      <Image
        source={location}
        style={{ height: 300, width: 250, resizeMode: "contain" }}
      ></Image>
    </View>
  );
}
