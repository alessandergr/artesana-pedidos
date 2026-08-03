import { CustomButton } from "@/core/components/CustomButton.component";
import { InputField } from "@/core/components/InputField.components";
import { FC, useState } from "react";
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
  description,
  onSubmit,
  disabled,
  loading,
  onChangeTitle,
  onChangeMessage,
}) => {
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const validateAndSubmit = () => {
    const cleanTitle = (title || "").trim();
    const cleanDescription = (description || "").trim();

    let titleMessage = "";
    let descriptionMessage = "";

    if (!cleanTitle) {
      titleMessage = "Ingrese el nombre del producto.";
    } else if (cleanTitle.length < 3) {
      titleMessage = "El nombre debe tener al menos 3 caracteres.";
    }

    if (!cleanDescription) {
      descriptionMessage = "Ingrese una descripción.";
    }

    setTitleError(titleMessage);
    setDescriptionError(descriptionMessage);

    if (titleMessage || descriptionMessage) {
      return;
    }

    onSubmit();
  };

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
              value={title}
              label="Nombre del producto"
              placeholder="Ejemplo: Pulsera artesanal"
              maxLength={50}
              error={titleError}
              onChangeText={(text) => {
                onChangeTitle(text);
                setTitleError("");
              }}
            />

            <InputField
              value={description}
              label="Descripción"
              placeholder="Describe brevemente el producto"
              multiline
              numberOfLines={4}
              maxLength={200}
              textAlignVertical="top"
              error={descriptionError}
              onChangeText={(text) => {
                onChangeMessage(text);
                setDescriptionError("");
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title={loading ? "Guardando..." : "Guardar producto"}
              onPress={validateAndSubmit}
              disabled={disabled || loading}
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
  buttonContainer: {
    marginTop: 20,
  },
});