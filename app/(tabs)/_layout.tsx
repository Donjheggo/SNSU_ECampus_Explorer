import { Tabs } from "expo-router";
import { Armchair } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { display: "none" },
        tabBarActiveTintColor: "#7F5539",
        tabBarInactiveTintColor: "#B08968",
        headerShown: false,
        headerTitleStyle: {
          fontSize: 20,
          color: "#9C6644",
        },
      }}
    >
      <Tabs.Screen
        name="locations"
        options={{
          title: "Locations",
          tabBarIcon: ({ color }) => <Armchair size={28} color={color} />,
        }}
      />

      <Tabs.Screen name="locations/[id]" />
    </Tabs>
  );
}
