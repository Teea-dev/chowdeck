import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import AllTab from "../../tabRoutes/Allroute";
const AllRoute = () => (
  <View style={[styles.scene, { backgroundColor: "white" }]}>
    <AllTab />
  </View>
);

const FoodRoute = () => (
  <View style={[styles.scene, { backgroundColor: "white" }]}>
    <Text>Food</Text>
  </View>
);

const SupermarketRoute = () => (
  <View style={[styles.scene, { backgroundColor: "white" }]}>
    <Text>Supermarket</Text>
  </View>
);

const PharmaciesRoute = () => (
  <View style={[styles.scene, { backgroundColor: "white" }]}>
    <Text>Pharmacies</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const SearchTabs = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "all", title: "All" },
    { key: "food", title: "Food" },
    { key: "supermarket", title: "Supermarkets" },
    { key: "pharmacies", title: "Pharmacies" },
  ]);

  const renderScene = SceneMap({
    all: AllRoute,
    food: FoodRoute,
    supermarket: SupermarketRoute,
    pharmacies: PharmaciesRoute,
  });

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: "transparent" }}
            style={styles.tabBar}
            renderLabel={({ route, focused }) => (
              <View
                style={[
                  styles.labelContainer,
                  focused ? styles.labelContainerFocused : null,
                ]}
              >
                <Text
                  style={[styles.label, focused ? styles.labelFocused : null]}
                >
                  {route.title}
                </Text>
              </View>
            )}
          />
        )}
      />
      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    borderColor: "#ddd",
    // padding:0,
    paddingVertical: -120,
    paddingHorizontal: -10,
  },
  labelContainer: {
    // padding: 8,
    // flex: 1, // Take up remaining space within each tab
    // alignItems: "center", // Center label text horizontally
    // justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  labelContainerFocused: {
    backgroundColor: "black",
  },
  label: {
    color: "#aaa",
    fontSize: 12,
  },
  labelFocused: {
    color: "white",
  },
});

export default SearchTabs;
