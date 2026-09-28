import { Pressable } from "react-native";

export default function MunicipalityCard({}) {
  const municipalities = municiplitiesData.filter(
    (municipality) => municipality.regionCode === regionCode,
  );

  return <Pressable></Pressable>;
}
