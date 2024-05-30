import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 
import { OnlineStoreBasket, Restaurant, Pharmacy } from "../assets/icons"; // Make sure the import path is correct

const Categories = ({ navigation }) => {
  const categories = [
    { category: "Restaurants", icon: "cutlery", customIcon: Restaurant },
    { category: "Supermarkets", icon: "shopping-cart", customIcon: OnlineStoreBasket },
    { category: "Pharmacies", icon: "medkit", customIcon: Pharmacy },
    { category: "Relay By Chowdeck", icon: "globe" },
    { category: "Local Markets", icon: "ellipsis-h" },
    { category: "More", icon: "ellipsis-h" },
  ];

  const renderCategory = ({ category, icon, customIcon: CustomIcon }, index) => (
    <View
      key={index}
      style={[
        styles.categoryContainer,
        { backgroundColor: getColor(index) },
      ]}
    >
      {CustomIcon ? (
        <CustomIcon width={30} height={30} style={styles.icon} />
      ) : (
        <Icon name={icon} size={30} style={styles.icon} />
      )}
      <Text style={styles.category}>{category}</Text>
    </View>
  );

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < categories.length; i += 3) {
      rows.push(
        <View style={styles.row} key={i}>
          {categories.slice(i, i + 3).map(renderCategory)}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      {renderRows()}
    </View>
  );
};

const getColor = (index) => {
  const colors = ["#f1e1ef", "rgb(236, 216, 212)", "#b3d3e8c5", "#ebe7d2", "#bdd6e7"];
  return colors[index % colors.length];
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10, 
  },
  categoryContainer: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 20, // Adjusted padding to allow more space for text
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    textAlign: "center",
    fontSize: 14, // Reduced font size to prevent cramping
    paddingHorizontal: 5, // Added horizontal padding
  },
  icon: {
    marginBottom: 10,
  },
});
