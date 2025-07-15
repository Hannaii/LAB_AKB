import React, { useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

const CELL_GAP = 6;                         // jarak antarsel
const GRID = 3;                             // 3 kolom
const CELL_SIZE =
  Dimensions.get("window").width / GRID - CELL_GAP * (GRID + 1) / GRID;

type Img = {
  id: number;
  mainSrc: string;
  altSrc: string;
  isFlipped: boolean;
  scale: number;
};

const initialImages: Img[] = [
  {
    id: 1,
    mainSrc: "https://picsum.photos/id/1015/400/400",
    altSrc: "https://picsum.photos/id/1011/400/400",
    isFlipped: false,
    scale: 1,
  },
  {
    id: 2,
    mainSrc: "https://picsum.photos/id/1025/400/400",
    altSrc: "https://picsum.photos/id/1020/400/400",
    isFlipped: false,
    scale: 1,
  },
  {
    id: 3,
    mainSrc: "https://picsum.photos/id/1035/400/400",
    altSrc: "https://picsum.photos/id/1031/400/400",
    isFlipped: false,
    scale: 1,
  },
  {
    id: 4,
    mainSrc: "https://picsum.photos/id/1045/400/400",
    altSrc: "https://picsum.photos/id/1041/400/400",
    isFlipped: false,
    scale: 1,
  },
  {
    id: 5,
    mainSrc: "https://picsum.photos/id/1055/400/400",
    altSrc: "https://picsum.photos/id/1051/400/400",
    isFlipped: false,
    scale: 1,
  },
  {
    id: 6,
    mainSrc: "https://picsum.photos/id/1065/400/400",
    altSrc: "https://picsum.photos/id/1061/400/400",
    isFlipped: false,
    scale: 1,
  },
  {
    id: 7,
    mainSrc: "https://picsum.photos/id/1075/400/400",
    altSrc: "https://picsum.photos/id/1071/400/400",
    isFlipped: false,
    scale: 1,
  },
  {
    id: 8,
    mainSrc: "https://picsum.photos/id/1085/400/400",
    altSrc: "https://picsum.photos/id/1081/400/400",
    isFlipped: false,
    scale: 1,
  },
  {
    id: 9,
    mainSrc: "https://picsum.photos/id/1095/400/400",
    altSrc: "https://picsum.photos/id/1091/400/400",
    isFlipped: false,
    scale: 1,
  },
];

export default function ImageGrid() {
  const [images, setImages] = useState(initialImages);

  const handlePress = (id: number) => {
    setImages((prev) =>
      prev.map((img) => {
        if (img.id !== id) return img; // gambar lain tidak berubah

        // Hitung skala baru (×1.2, maksimum 2)
        const newScale = Math.min(img.scale * 1.2, 2);

        return {
          ...img,
          isFlipped: true,         // sekali flipped, tetap alternatif
          scale: newScale,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <View style={styles.grid}>
        {images.map((img) => (
          <TouchableOpacity
            key={img.id}
            onPress={() => handlePress(img.id)}
            style={styles.cell}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: img.isFlipped ? img.altSrc : img.mainSrc }}
              style={[
                styles.image,
                {
                  transform: [{ scale: img.scale }],
                },
              ]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: CELL_GAP,
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    margin: CELL_GAP / 2,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
