// Home Component (app/index.js)

import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../../../constants";
import { Stack, useRouter } from "expo-router";
import Handpicked from "../../../components/Handpicked";
import Allrestaurants from "../../../components/Allrestaurants";
import Categories from "../../../components/Categories";
import { PromoCode, Filter } from "../../../assets/icons";
import Featured from "../../../components/Featured";

export default function Home() {
  const router = useRouter();

  const handleRoute = (restaurant) => {
    router.push("/details");
  };

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
});
