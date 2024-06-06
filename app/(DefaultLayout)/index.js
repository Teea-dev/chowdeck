import React from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../../constants";
import { Stack } from "expo-router";
import Handpicked from "../../components/Handpicked";
import Allrestaurants from "../../components/Allrestaurants";
import Categories from "../../components/Categories";
// import ScreenHeaderBtn from '../../components/header/ScreenHeaderBtn';
// import LocationSearch from '../components/locationSearch/locationSearch.jsx';
import { PromoCode, Filter } from "../../assets/icons";
import Featured from "../../components/Featured";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white },
          headerShadowVisible: false,
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <View style={styles.iconContainer}>
                <PromoCode />
                <Filter />
              </View>
              {/* <LocationSearch style={styles.locationSearch} /> */}
            </View>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView>
        <Categories />
        <Handpicked />
        <Featured />
        <Allrestaurants />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  headerRightContainer: {
    paddingRight: 16,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
