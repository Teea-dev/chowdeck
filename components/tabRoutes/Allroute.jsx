import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { SearchContext } from "../context/searchContext";
import {
  AsianBowl,
  Breakfast,
  HealthySalad,
  Mexican,
  Pastries,
  Pizza,
  Rice,
  Shawarma,
  Soup,
  Spaghetti,
} from "../../assets/icons";

const colors = ["#f1e1ef", "rgb(236, 216, 212)", "#b3d3e8c5", "#ebe7d2", "#bdd6e7"];

const categories = [
  { category: "Pastries", customIcon: Pastries },
  { category: "Healthy", customIcon: HealthySalad },
  { category: "Breakfast", customIcon: Breakfast },
  { category: "Pizza", customIcon: Pizza },
  { category: "Soups", customIcon: Soup },
  { category: "Spaghetti", customIcon: Spaghetti },
  { category: "Rice", customIcon: Rice },
  { category: "Shawarma", customIcon: Shawarma },
  { category: "Asian", customIcon: AsianBowl },
  { category: "Mexican", customIcon: Mexican },
];

const AllTab = () => {
  const { setSearchInput } = useContext(SearchContext);

  return (
    <View style={[styles.scene, { backgroundColor: "white" }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        {categories.map((item, index) => {
          const IconComponent = item.customIcon;
          const backgroundColor = colors[index % colors.length];
          return (
            <TouchableOpacity key={index} onPress={() => setSearchInput(item.category)}>
              <View style={[styles.categoryItem, { backgroundColor }]}>
                <IconComponent size={30} style={styles.icon} />
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
  },
  categoryItem: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
paddingVertical: 6,
paddingHorizontal: 18,
    marginVertical: 20,
    marginRight: 15,
    borderRadius: 5,
    width: 'auto',
  },
  icon: {
    marginRight: 10,
  },
  categoryText: {
    fontSize: 12,
    color: "#333",
    fontWeight:'500',

  },
});

export default AllTab;
