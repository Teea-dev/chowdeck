import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { COLORS } from "../constants";

const Handpicked = ({ navigation }) => {
  const handpickedResturant = [
    "Hexagon Rice",
    "KFC-Ibadan",
    "Chef-kabs",
    "Burger-King",
    "Starbucks",
    "Dodo-pizza",
    "Chicken Republic"
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Handpicked for you 💚</Text>
      <FlatList
        data={handpickedResturant}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <Pressable
            style={[styles.card, { backgroundColor: COLORS.gray2 }]}
            onPress={() => navigation.navigate("Details", { item })}
          >
            <Image source={{ uri: item.image }} />
            <Text>{item}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Handpicked;
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  header: {
    fontSize: 20,
    fontWeight:"600",
    marginLeft:13
  },
  card: {
    margin: 5,
    padding: 20,
  },
  flatlist: {
    marginVertical:10,
    marginLeft:3
  },
});
