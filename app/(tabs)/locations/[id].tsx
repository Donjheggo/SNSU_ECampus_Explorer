import {
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { Text } from "~/components/ui/text";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import type { LocationT } from "../locations";
import { GetLocationById } from "~/lib/actions/locations";
import { Image } from "expo-image";
import { blurhash } from "~/lib/utils";
import BackButton from "~/components/back-button";

export default function Screen() {
  const { id } = useLocalSearchParams();
  const [location, setLocation] = useState<LocationT>();

  useEffect(() => {
    const fetchLocation = async () => {
      const location = await GetLocationById(id as string);
      setLocation(location);
    };
    fetchLocation();
  }, [id]);

  return (
    <SafeAreaView
      className="h-full bg-secondary"
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView>
          <View className="p-5">
            <View className="py-5">
              <BackButton />
            </View>
            {location?.image && (
              <Image
                placeholder={{
                  blurhash: Platform.OS === "android" ? undefined : blurhash,
                }}
                source={location?.image}
                style={{ borderRadius: 10, height: 400 }}
                contentFit="cover"
                transition={1000}
              />
            )}
            <View
              style={{ display: "flex", flexDirection: "column" }}
              className="mt-5"
            >
              <View>
                <Text className="text-4xl" style={{ fontWeight: "bold" }}>
                  {location?.name}
                </Text>
              </View>
              <View className="mt-5">
                <Text className="text-2xl">Location: {location?.address}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
