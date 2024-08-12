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
          headerStyle: { backgroundColor: "white", paddingVertical:120 },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <BackArrow />
                  <Text  style={{ marginLeft: 10 }}>{name}</Text>
                </TouchableOpacity>
              </View>
              <View  style={{ marginLeft: 20, marginTop:5, marginBottom:10}}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>Open until 09:00pm</Text>
                  <NextNav size={13} />
                </TouchableOpacity>
              </View>
            </View>
          ),
          headerRight: () => {
            return (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#E5E7EB",
                    padding: 5,
                    borderRadius: 50,
                    marginLeft: 10,
                  }}
                >
                  <Share color="#0C513F" size={16} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#E5E7EB",
                    padding: 5,
                    borderRadius: 50,
                    marginLeft: 10,
                  }}
                >
                  <Heart color="#0C513F" size={16} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#E5E7EB",
                    padding: 5,
                    borderRadius: 50,
                    marginLeft: 10,
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
