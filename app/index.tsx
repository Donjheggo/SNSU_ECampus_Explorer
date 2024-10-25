import { View, Image, ScrollView, Pressable } from "react-native";
import { Text } from "~/components/ui/text";
import { useRouter } from "expo-router";

export default function Screen() {
  const router = useRouter();
  return (
    <ScrollView className="h-full bg-secondary">
      <View className="min-h-[80vh] flex justify-center items-center gap-5 p-5">
        <Image
          source={require("../assets/images/index.png")}
          resizeMode="contain"
          style={{ width: 600, height: 250 }}
        />

        <Text className="font-semibold text-xl text-center text-black mt-5">
          Explore every building, locate essential facilities, and find your way
          around campus effortlessly with Ecampus Explorer.
        </Text>

        <Pressable
          onPress={() => router.push("/(tabs)/locations")}
          className="w-full"
        >
          <View className="w-full border text-center border-primary bg-primary rounded-lg p-5 items-center flex justify-center overflow-hidden">
            <Text className="text-xl text-black font-semibold">
              Get Started
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}
