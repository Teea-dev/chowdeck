import React, { useContext } from "react";
import { View, TextInput, StyleSheet, Keyboard, TouchableOpacity } from "react-native";
import { SearchContext } from "../../../context/searchContext";
import { Search, Cancel } from "../../../../assets/icons";

export default function SearchInput() {
  const { searchInput, setSearchInput } = useContext(SearchContext);

  const handleCancel = () => {
    setSearchInput("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Search size={20} color="#494747" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Food, drinks, groceries etc"
        placeholderTextColor="#aaa"
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
      />
      {searchInput !== "" && (
        <TouchableOpacity onPress={handleCancel}>
          <Cancel size={15} color="#494747" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 20,
    backgroundColor: "#f5f5f5",
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
