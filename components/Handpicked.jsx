import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import RestaurantCard from "./RestaurantCard"; // Ensure the path is correct
import { images } from "../constants"; // Adjust the path if necessary

const Handpicked = ({ navigation }) => {
  const handpickedResturant = [
    { name: "Hexagon Rice Samonda", image: images.hexagon },
    { name: "KFC-Ibadan", image: images.kfc },
    { name: "Chef-kabs", image: images.pasta },
    { name: "Burger-King", image: images.burgerKing },
    { name: "Starbucks", image: images.starbuck },
    { name: "Dodo-pizza", image: images.dodo },
    { name: "Chicken Republic", image: images.chickenRepublic },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Handpicked for you 💚</Text>
      <FlatList
        data={handpickedResturant}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <RestaurantCard
            name={item.name}
            image={item.image}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Handpicked;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 13,
  },
  flatlist: {
    marginVertical: 10,
    marginLeft: 3,
  },
});
