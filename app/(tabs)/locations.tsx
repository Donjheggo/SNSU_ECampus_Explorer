import SearchBar from "~/components/locations/search-bar";
import {
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { Tables } from "~/database.types";
import { SearchLocations } from "~/lib/actions/locations";
import { useLocalSearchParams } from "expo-router";
import LocationCard from "~/components/locations/location-card";

export default function Screen() {
  const { query } = useLocalSearchParams();
  const [products, setProducts] = useState<LocationT[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await SearchLocations(query as string);
      setProducts(data ?? []);
    };
    fetchProducts();
  }, [query]);

  return (
    <SafeAreaView
      className="h-full bg-secondary"
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView>
        <View className="p-5">
          <SearchBar />
          <View
            className="gap-2"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 15,
            }}
          >
            <FlatList
              data={products}
              renderItem={(item) => <LocationCard item={item} />}
              keyExtractor={(_, index) => `${index}`}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export type LocationT = Tables<"locations">;
