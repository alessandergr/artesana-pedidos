import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#7F4A2A",
      tabBarInactiveTintColor: "#907C6E",
      tabBarStyle: {
        backgroundColor: "#FFFFFF",
        borderTopColor: "#EADFD3",
        height: 68,
        paddingTop: 7,
        paddingBottom: 9,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "600",
      },
    }}
    >
      <Tabs.Screen
        name="products"
        options={{
          title: "Productos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="bag-handle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}