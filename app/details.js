import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Stack } from "expo-router";
import { TouchableOpacity, Image } from "react-native";
import { RestaurantContext } from "../components/context/restaurantContext";
import { useRouter, useLocalSearchParams } from "expo-router";

const DetailPage = () => {
 

  const router = useRouter();
  const { name } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: "Detail Page",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ color: "#fff" }}>hi</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Text>Details for {name}</Text>
    </View>
  );
};

export default DetailPage;
