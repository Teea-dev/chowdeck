import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { COLORS, icons, images } from "../constants";
import Handpicked from "../components/Handpicked";
import Featured from "../components/Featured";
import Allrestaurants from "../components/Allrestaurants";
import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";
import LocationSearch from "../components/locationSearch/locationSearch";
import Categories from "../components/Categories";
export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.white, },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.discounted} dimension="60%" />
          ),
          headerLeft: () => (
            <LocationSearch/>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView >
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
