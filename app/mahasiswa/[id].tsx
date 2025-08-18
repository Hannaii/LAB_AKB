import { useLocalSearchParams } from "expo-router";
import { View, Text, Image } from "react-native";
import { mahasiswa } from "../../data/mahasiswa";

export default function DetailMahasiswa() {
  const params = useLocalSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id; // pastikan string

  const data = mahasiswa.find((mhs) => mhs.id.toString() === id);

  if (!data) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f8fafc" }}
      >
        <Text style={{ fontSize: 18, color: "#64748b" }}>❌ Mahasiswa tidak ditemukan</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20, backgroundColor: "#f8fafc" }}>
      <Image
        source={{ uri: data.foto }}
        style={{
          width: 140,
          height: 140,
          borderRadius: 70,
          marginBottom: 20,
          borderWidth: 3,
          borderColor: "#2563eb",
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#1e293b",
          marginBottom: 8,
        }}
      >
        {data.nama}
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "#475569",
          backgroundColor: "#e2e8f0",
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 10,
        }}
      >
        🎓 NIM: {data.nim}
      </Text>
    </View>
  );
}
