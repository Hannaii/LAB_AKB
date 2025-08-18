import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { mahasiswa } from "../data/mahasiswa";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f1f5f9", padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 15, color: "#1e293b" }}>
        📋 Daftar Mahasiswa
      </Text>

      <FlatList
        data={mahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/mahasiswa/${item.id}` as any} asChild>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                backgroundColor: "white",
                borderRadius: 12,
                marginBottom: 10,
                shadowColor: "#000",
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 2,
              }}
            >
              <Ionicons name="person-circle-outline" size={28} color="#2563eb" style={{ marginRight: 12 }} />
              <Text style={{ fontSize: 18, color: "#0f172a" }}>{item.nama}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}
