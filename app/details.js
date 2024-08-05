import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { TouchableOpacity, Image } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { BackArrow, Heart, Share, Search, NextNav } from "../assets/icons";

const DetailPage = () => {
  const router = useRouter();
  const { name } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white", margin: 50 },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <View>
              <TouchableOpacity
                onPress={() => router.back()}
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <BackArrow />
                <View>
                  <Text>{name}</Text>
                </View>
              </TouchableOpacity>
              <Text >
                Open until 09:00pm
               <NextNav size={13}/>
              </Text>
            </View>
          ),
          headerRight: () => {
            return (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 6 }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#E5E7EB",
                    padding: 5,
                    borderRadius: 50,
                  }}
                >
                  <Share color="#0C513F" size={16} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#E5E7EB",
                    padding: 5,
                    borderRadius: 50,
                  }}
                >
                  <Heart color="#0C513F" size={16} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#E5E7EB",
                    padding: 5,
                    borderRadius: 50,
                  }}
                >
                  <Search color="#0C513F" size={16} />
                </TouchableOpacity>
              </View>
            );
          },
        }}
      />
      <Text>Details for {name}</Text>
    </View>
  );
};

export default DetailPage;
