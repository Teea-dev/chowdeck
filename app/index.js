import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Chowdeck
          hi</Text>
        </View>
      </View>
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
