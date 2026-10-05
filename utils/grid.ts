import { useWindowDimensions } from "react-native";

export function useGridLayout() {
  const { width } = useWindowDimensions();

  const gap = 20;
  const padding = 20;

  const columns = width >= 1200 ? 5 : width >= 600 ? 3 : width >= 500 ? 2 : 1;

  const availableWidth = width - padding * 2;

  const cardWidth = (availableWidth - gap * (columns - 1)) / columns;

  return {
    columns,
    gap,
    padding,
    cardWidth,
  };
}
