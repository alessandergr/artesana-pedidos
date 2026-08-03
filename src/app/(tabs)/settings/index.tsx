import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi perfil</Text>
      <Text style={styles.description}>
        Aquí se mostrará la información del usuario.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FAF4ED",
  },
  title: {
    marginTop: 40,
    fontSize: 28,
    fontWeight: "bold",
    color: "#3E2F25",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    color: "#6E5B4E",
  },
});