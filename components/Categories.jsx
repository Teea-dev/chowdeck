// import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 



const Categories = ({ navigation }) => {
  const category = [
    { category: "Restaurants", icon: "cutlery" },
    { category: "Supermarkets", icon: "shopping-cart" },
    { category: "Pharmacies", icon: "medkit" },
    { category: "African", icon: "globe" },
    { category: "More", icon: "ellipsis-h" },
  ];

  const firstRow = category.slice(0, 2);
  const secondRow = category.slice(2);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {firstRow.map(({category,icon}, index) => (
          <View
            key={index}
            style={[styles.categoryContainer, { backgroundColor: getColor(index), paddingHorizontal:45 }]}
          >
             <Icon name={icon} size={30} style={styles.icon} />
            <Text style={styles.category}>{category}</Text>
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {secondRow.map(({category,icon}, index) => (
          <View
            key={index}
            style={[styles.categoryContainer, { backgroundColor: getColor(index + 2) }]}
          >
              <Icon name={icon} size={30} style={styles.icon} />
            <Text style={styles.category}>{category}</Text>
          </View>
        ))}
      </View>
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
    backgroundColor: "#0000",
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10, 
    gap:50
  },
  categoryContainer: {
    backgroundColor: "#83829A",
    marginHorizontal: 5,
    padding: 30,
    borderRadius:10
  },
  category: {
    textAlign: "center",
    fontSize:16
    // padding:5
  },
  icon: {
    marginBottom: 10,
    alignItems:"center" ,
    justifyContent:'center'
  },
});
