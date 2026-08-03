import { CustomButton } from "@/core/components/CustomButton.component";
import { InputField } from "@/core/components/InputField.components";
import { FC } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface ProductFormProps {
  title?: string;
  description?: string;
  onSubmit: () => void;
  disabled?: boolean;
  loading?: boolean;
  onChangeTitle: (title: string) => void;
  onChangeMessage: (description: string) => void;
}

export const ProductForm: FC<ProductFormProps> = ({
  title,
  onSubmit,
  description,
  loading,
  disabled,
  onChangeTitle,
  onChangeMessage,
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            <InputField
              onChangeText={onChangeTitle}
              value={title}
              label="Nombre del producto"
              placeholder="Ejemplo: Pulsera artesanal"
            />
            <InputField
              value={description}
              onChangeText={onChangeMessage}
              label="Descripción"
              placeholder="Describe brevemente el producto"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <CustomButton
              title={loading ? "Guardando..." : "Guardar producto"}
              onPress={onSubmit}
              disabled={disabled}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  formContainer: {
    gap: 24,
  },
});
