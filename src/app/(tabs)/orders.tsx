import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrdersScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mis pedidos</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/orders/new")}
        >
          <Ionicons name="add" size={24} color="#FFFFFF" />
          <Text style={styles.buttonText}>Nuevo</Text>
        </Pressable>
      </View>

      <View style={styles.emptyContainer}>
        <Ionicons name="receipt-outline" size={70} color="#CDAE90" />
        <Text style={styles.emptyTitle}>Aún no hay pedidos</Text>
        <Text style={styles.emptyText}>
          Los pedidos registrados aparecerán aquí.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FAF4ED",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3E2F25",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#A8653A",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: "bold",
    color: "#3E2F25",
  },
  emptyText: {
    marginTop: 8,
    fontSize: 15,
    color: "#6E5B4E",
  },
});