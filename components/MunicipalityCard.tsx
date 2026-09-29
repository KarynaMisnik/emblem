import { Pressable, Text, View } from "react-native";

export default function MunicipalityCard({ name, code }) {
  return (
    <Pressable>
      <View>
        <Text style={{ color: "white" }}>{name}</Text>
        <Text style={{ color: "white" }}>{code}</Text>
      </View>
    </Pressable>
  );
}
