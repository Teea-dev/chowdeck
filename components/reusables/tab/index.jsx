import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FoodRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#ff4081" }]}>
    <Text>Food</Text>
  </View>
);

const DrinksRoute = () => (
  <View style={[styles.scene, { backgroundColor: "#673ab7" }]}>
    <Text>Drinks</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const SearchTabs = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "food", title: "Food" },
    { key: "drinks", title: "Drinks" },
  ]);

  const renderScene = SceneMap({
    food: FoodRoute,
    drinks: DrinksRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={styles.indicator}
          style={styles.tabBar}
          labelStyle={styles.label}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: "red",
  },
  indicator: {
    backgroundColor: "green",
  },
  label: {
    color: "black",
    fontWeight: "bold",
  },
});

export default SearchTabs;
