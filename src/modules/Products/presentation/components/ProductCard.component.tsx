import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeContext } from "@/core/contexts/theme.context";
import { IconButton } from "@/core/components/IconButton.component";

interface ProductCardProps {
  title: string;
  description?: string;
  onEdit: VoidFunction;
  onDelete: VoidFunction;
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  onEdit,
  onDelete,
}) => {
  const { palette } = useThemeContext();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: palette.colors.surface,
          ...palette.shadows.sm,
        },
      ]}
    >
      <View style={styles.header}>
        <Text
          numberOfLines={1}
          style={[styles.title, { color: palette.texts.primary }]}
        >
          {title}
        </Text>
        <View style={styles.actions}>
          <IconButton
            icon={Feather}
            name="edit-3"
            color="primary"
            onPress={onEdit}
          />
          <IconButton
            icon={MaterialIcons}
            name="delete-outline"
            color="error"
            onPress={onDelete}
          />
        </View>
      </View>
      <Text
        numberOfLines={2}
        style={[styles.description, { color: palette.texts.secondary }]}
      >
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  actions: {
    flexDirection: "row",
    gap: 4,
  },
  title: {
    flex: 1,
    marginRight: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 21,
  },
});
