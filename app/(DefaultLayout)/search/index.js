import React from "react";
import { View, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import SearchInput from "../../../components/reusables/form/searchInput";
import SearchTabs from "../../../components/reusables/tab";
import { SearchProvider } from "../../../components/context/searchContext";

const SearchPage = () => {
  return (
    <>
      <SearchProvider>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <View style={styles.container}>
          <SearchInput />
          <SearchTabs />
        </View>
      </SearchProvider>
    </>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", // Adjusted to align items to the start
    padding: 24,
    backgroundColor: "#fff",
  },
});
