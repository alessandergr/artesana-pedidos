import { CustomButton } from "@/core/components/CustomButton.component";
import { InputField } from "@/core/components/InputField.components";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface OrderErrors {
  client?: string;
  product?: string;
  quantity?: string;
  price?: string;
}

export default function NewOrderScreen() {
  const router = useRouter();

  const [client, setClient] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState<OrderErrors>({});
  const [message, setMessage] = useState("");

  const validateOrder = () => {
    const newErrors: OrderErrors = {};

    if (!client.trim()) newErrors.client = "Ingrese el nombre del cliente.";
    if (!product.trim()) newErrors.product = "Ingrese un producto.";
    if (Number(quantity) <= 0) newErrors.quantity = "Ingrese una cantidad válida.";
    if (Number(price) <= 0) newErrors.price = "Ingrese un precio válido.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setMessage("Datos correctos. El pedido está listo para guardarse.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#7F4A2A" />
        </Pressable>
        <Text style={styles.title}>Nuevo pedido</Text>
      </View>

      <ScrollView contentContainerStyle={styles.form}>
        <InputField
          label="Cliente"
          placeholder="Ejemplo: María López"
          value={client}
          error={errors.client}
          onChangeText={(text) => {
            setClient(text);
            setErrors({ ...errors, client: undefined });
          }}
        />

        <InputField
          label="Producto"
          placeholder="Ejemplo: Pulsera artesanal"
          value={product}
          error={errors.product}
          onChangeText={(text) => {
            setProduct(text);
            setErrors({ ...errors, product: undefined });
          }}
        />

        <InputField
          label="Cantidad"
          placeholder="Ejemplo: 2"
          value={quantity}
          keyboardType="number-pad"
          error={errors.quantity}
          onChangeText={(text) => {
            setQuantity(text);
            setErrors({ ...errors, quantity: undefined });
          }}
        />

        <InputField
          label="Precio total"
          placeholder="Ejemplo: 50"
          value={price}
          keyboardType="decimal-pad"
          error={errors.price}
          onChangeText={(text) => {
            setPrice(text);
            setErrors({ ...errors, price: undefined });
          }}
        />

        <Text style={styles.status}>Estado: Pendiente</Text>

        {message ? <Text style={styles.success}>{message}</Text> : null}

        <CustomButton title="Guardar pedido" onPress={validateOrder} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAF4ED" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    padding: 24,
  },
  title: { fontSize: 26, fontWeight: "bold", color: "#3E2F25" },
  form: { gap: 20, padding: 24, paddingTop: 5 },
  status: { fontSize: 16, fontWeight: "600", color: "#6E5B4E" },
  success: { fontSize: 14, color: "#476B44" },
});