import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { SearchHat } from "../../assets/icons";

const ItemSearch = () => {
  return (
    <View style={[styles.scene, { backgroundColor: "white" }]}>
      <View style={styles.icon}>
        <SearchHat />
      </View>
      <Text style={styles.categoryText}>Search for an item</Text>
      <Text style={styles.getStartedText}>
        Enter a search item to get started
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    gap: 10,
  },

  icon: {
    backgroundColor: "#f1e1ef",
    paddingVertical: 35,
    paddingHorizontal: 35,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 20,
    color: "#333",
    fontWeight: "500",
  },
  getStartedText: {
    color: "#aaa",
    fontSize: 12,
  },
});

export default ItemSearch;
