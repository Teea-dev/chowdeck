import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images } from "../constants";
import Handpicked from "../components/Handpicked";
import Featured from "../components/Featured";
// import Categories from "../components/Categories";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="100%" />
          ),
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.discount} dimension="100%" />
          ),
          headerTitle: "HEADING",
        }}
      />
      <ScrollView >
        {/* <Categories /> */}
        <Handpicked />
        <Featured />
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
