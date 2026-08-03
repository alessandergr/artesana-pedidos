import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { useThemeContext } from "../contexts/theme.context";

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const InputField = ({
  label,
  error,
  ...props
}: InputFieldProps) => {
  const { palette } = useThemeContext();

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: palette.texts.primary }]}>
          {label}
        </Text>
      )}

      <TextInput
        {...props}
        placeholderTextColor={palette.texts.tertiary}
        style={[
          styles.input,
          {
            color: palette.texts.primary,
            backgroundColor: palette.colors.surface,
            borderColor: error
              ? palette.colors.error
              : palette.colors.border,
            minHeight: props.multiline ? 120 : 54,
          },
          props.style,
        ]}
      />

      {error && (
        <Text style={[styles.error, { color: palette.colors.error }]}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 14,
    fontSize: 16,
  },
  error: {
    marginLeft: 4,
    fontSize: 13,
  },
});