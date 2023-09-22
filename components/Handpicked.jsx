// import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { COLORS, images } from "../constants";
import Icon from "react-native-vector-icons/FontAwesome";

const RestaurantCard = ({ name, image, navigation }) => (
  <Pressable
    style={[styles.card]}
    onPress={() => navigation.navigate("Details", { name })}
  >
    {image && (
      <Image source={image} style={[styles.image, { borderRadius: 10 }]} />
    )}
    <Text style={styles.name}>{name}</Text>
    <View style={styles.deliveryAndRating}>

    <View style={styles.deliveryInfoContainer}>
      <Icon name="motorcycle" size={18} style={styles.icon} />
      <Text style={styles.deliveryInfo}>From ₦400 | 19-20min</Text>
    </View>
    <View>
      <Text style={styles.rating}>4.2 (167) </Text>
    </View>
    </View>
  </Pressable>
);

const Handpicked = ({ navigation }) => {
  const handpickedResturant = [
    { name: "Hexagon Rice Samonda", image: images.hexagon },
    { name: "KFC-Ibadan", image: images.kfc },
    { name: "Chef-kabs", image: images.pasta },
    { name: "Burger-King", image: images.burgerKing },
    { name: "Starbucks", image: images.starbuck },
    { name: "Dodo-pizza", image: images.dodo },
    { name: "Chicken Republic", image: images.chickenRepublic },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Handpicked for you 💚</Text>
      <FlatList
        data={handpickedResturant}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <RestaurantCard
            name={item.name}
            image={item.image}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
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
    fontWeight: "600",
    marginLeft: 13,
  },
  card: {
    margin: 5,
    padding: 10,
  },
  flatlist: {
    marginVertical: 10,
    marginLeft: 3,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: "cover",
  },
  deliveryInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },

  deliveryInfo: {
    fontSize: 15,
    color: COLORS.gray,
  },
  deliveryAndRating:{
    flexDirection:"row",
    alignItems: "center",
    marginTop: 10,

    justifyContent:"space-between"
  },
  rating:{
    fontWeight:"600"
  }
});
