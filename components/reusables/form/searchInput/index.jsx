import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Search } from "../../../../assets/icons";
import CancelIcon from "../../../../assets/icons/cancel";
export default function SearchInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleCancel = () => {
    setInputValue("");
    setIsFocused(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon}>
          <Search size={20} color="#494747" />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Food, drinks, groceries etc"
          placeholderTextColor="#aaa"
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused && (
          <TouchableOpacity onPress={handleCancel}>
            <CancelIcon size={15} color="#494747" />
          </TouchableOpacity>
        )}
      </View>
    </>
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

    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    backgroundColor: "transparent",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
