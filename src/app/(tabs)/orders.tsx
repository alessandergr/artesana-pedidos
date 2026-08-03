import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OrdersScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Mis pedidos</Text>

      <View style={styles.emptyContainer}>
        <Ionicons
          name="receipt-outline"
          size={70}
          color="#CDAE90"
        />

        <Text style={styles.emptyTitle}>
          Aún no hay pedidos
        </Text>

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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3E2F25",
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
    textAlign: "center",
    color: "#6E5B4E",
  },
});