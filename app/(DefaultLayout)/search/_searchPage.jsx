import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";
function Search() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>
        <Text>Hi Ijn</Text>
      </View>
    </>
  );
}

export default Search;
