import { TouchableOpacity, View } from "react-native";
import { Text } from "../ui/text";
import type { LocationT } from "~/app/(tabs)/locations";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { blurhash } from "~/lib/utils";

export default function LocactionCard({ item }: { item: LocationT }) {
  return (
    <View style={{ width: "49%" }}>
      <Link
        href={{ pathname: "/(tabs)/locations/[id]", params: { id: item.id } }}
        asChild
      >
        <TouchableOpacity>
          <Image
            source={item.image}
            placeholder={{ blurhash }}
            contentFit="cover"
            style={{ height: 175, borderRadius: 10 }}
            transition={1000}
          />

          <Text className="text-2xl font-semibold">{item.name}</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
