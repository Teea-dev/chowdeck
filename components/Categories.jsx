import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

const Categories = ({ navigation }) => {
  const category = [
    "Resturant",
    "Pharmacies",
    "Supermarkets",
    "African",
    "More",
  ];
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={category}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Pressable
            style={[
              styles.categoryContainer,
              { backgroundColor: getColor(index) },
            ]}
          >
            <Text style={styles.category}>{item}</Text>
          </Pressable>
        )}
        keyExtractor={(item, index) => index.toString}
      />
    </View>
  );
};

const getColor = (index) => {
  const colors = ["#83829A", "#FF5733", "#33FF57", "#5733FF", "#FF5733"];
  return colors[index % colors.length];
};
export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    margin: 20,
  },
  flatlist: {
    flexDirection: "row",
  },
  categoryContainer: {
    flex: 1,
    margin: 5,
  },
  category: {
    padding: 30,
  },
});
