import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

// Total 9 gambar utama dan 9 alternatif (sesuai tugas)
const initialGridImages = [
  { id: 1, mainSrc: 'https://picsum.photos/id/201/200', altSrc: 'https://picsum.photos/id/202/200', isFlipped: false, scale: 1 },
  { id: 2, mainSrc: 'https://picsum.photos/id/203/200', altSrc: 'https://picsum.photos/id/204/200', isFlipped: false, scale: 1 },
  { id: 3, mainSrc: 'https://picsum.photos/id/205/200', altSrc: 'https://picsum.photos/id/206/200', isFlipped: false, scale: 1 },
  { id: 4, mainSrc: 'https://picsum.photos/id/207/200', altSrc: 'https://picsum.photos/id/208/200', isFlipped: false, scale: 1 },
  { id: 5, mainSrc: 'https://picsum.photos/id/209/200', altSrc: 'https://picsum.photos/id/210/200', isFlipped: false, scale: 1 },
  { id: 6, mainSrc: 'https://picsum.photos/id/211/200', altSrc: 'https://picsum.photos/id/212/200', isFlipped: false, scale: 1 },
  { id: 7, mainSrc: 'https://picsum.photos/id/213/200', altSrc: 'https://picsum.photos/id/214/200', isFlipped: false, scale: 1 },
  { id: 8, mainSrc: 'https://picsum.photos/id/215/200', altSrc: 'https://picsum.photos/id/216/200', isFlipped: false, scale: 1 },
  { id: 9, mainSrc: 'https://picsum.photos/id/217/200', altSrc: 'https://picsum.photos/id/218/200', isFlipped: false, scale: 1 },
];

export default function Index() {
  const [gridImages, setGridImages] = useState(initialGridImages);

  const handleImagePress = (imageId: number) => {
    setGridImages(currentImages =>
      currentImages.map(image => {
        if (image.id === imageId) {
          const newScale = Math.min(image.scale * 1.2, 2);
          return {
            ...image,
            isFlipped: !image.isFlipped,
            scale: newScale,
          };
        }
        return image;
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Grid 3x3 Eksplisit */}
      <View style={styles.gridWrapper}>
        {[0, 1, 2].map(row => (
          <View key={row} style={styles.gridRow}>
            {gridImages.slice(row * 3, row * 3 + 3).map(image => (
              <TouchableOpacity
                key={image.id}
                onPress={() => handleImagePress(image.id)}
                style={styles.gridCell}
              >
                <Image
                  source={{ uri: image.isFlipped ? image.altSrc : image.mainSrc }}
                  style={[
                    styles.gridImage,
                    { transform: [{ scale: image.scale }] }
                  ]}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Komponen Lain */}
      <View style={styles.rectangle}>
        <Image
          source={{ uri: "https://media1.tenor.com/m/R8csty7sKYMAAAAd/tung-tung-sahur.gif" }}
          style={styles.image}
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
      <View style={styles.blueCircle}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 60,
  },
  gridWrapper: {
    marginBottom: 30,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  gridCell: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
  rectangle: {
    width: 220,
    height: 110,
    backgroundColor: "#eee",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
  },
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
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d97a93ff",
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
  textContainer: {
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
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
  blueCircle: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 100,
    marginTop: 10
  },
});
