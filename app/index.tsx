import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


const GRID_COLS = 3;
const CELL_GAP = 6;
const CELL_SIZE =
  Dimensions.get("window").width / GRID_COLS - (CELL_GAP * (GRID_COLS + 1)) / GRID_COLS;


const initialGridImages = [
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


export default function Index() {
  const [gridImages, setGridImages] = useState(initialGridImages);

  /** Handle klik satu sel gambar */
  const handleImagePress = (imageId: number) => {
    setGridImages((prev) =>
      prev.map((img) => {
        if (img.id !== imageId) return img; // gambar lain tidak berubah

        // --- Hitung skala baru TANPA pernah melewati 2 -----------------
        if (img.scale >= 2) return img; // sudah maksimum, abaikan klik

        const multiplied = img.scale * 1.2;
        const newScale = multiplied > 2 ? 2 : +multiplied.toFixed(2);

        return {
          ...img,
          isFlipped: true, // sekali flip tetap alternatif
          scale: newScale,
        };
      }),
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ---------- Bagian elemen non‑grid (rectangle, triangle, dll.) ---------- */}
      <View style={styles.rectangle}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/250px-Real_Madrid_CF.svg.png",
          }}
          style={styles.rectangleImg}
          resizeMode="cover"
        />
      </View>

      <View style={styles.triangle} />

      <View style={styles.pill}>
        <MaterialIcons name="person" size={24} color="white" />
        <Text style={styles.pillText}>105841110922</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.redText}>Hanna Maryam</Text>
        <Text style={styles.whiteText}>105841110922</Text>
      </View>

      {/* ------------------- GRID 3×3 ------------------- */}
      <View style={styles.gridContainer}>
        {gridImages.map((img) => (
          <TouchableOpacity
            key={img.id}
            onPress={() => handleImagePress(img.id)}
            style={styles.gridCell}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: img.isFlipped ? img.altSrc : img.mainSrc }}
              style={[styles.gridImg, { transform: [{ scale: img.scale }] }]}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

// ==================== 4. Styles ====================
const styles = StyleSheet.create({
  /* Layar utama */
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 60,
  },
  /* 4.1 Rectangle (logo) */
  rectangle: {
    width: 220,
    height: 110,
    backgroundColor: "#eee",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleImg: {
    width: "100%",
    height: "100%",
  },
  /* 4.2 Triangle */
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 70,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "orange",
    marginBottom: 20,
  },
  /* 4.3 Pill */
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dd549bff",
    borderRadius: 50,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pillText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  /* 4.4 Nama + NIM */
  textContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },
  redText: {
    color: "red",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  whiteText: {
    color: "white",
    fontWeight: "bold",
  },
  /* 4.5 Grid */
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    padding: CELL_GAP / 2,
  },
  gridCell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    margin: CELL_GAP / 2,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#543a23ff",
  },
  gridImg: {
    width: "100%",
    height: "100%",
  },
});
