import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../constants"; // Adjust the path if necessary

const RestaurantCard = ({ name, image, navigation }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handlePress = () => {
    console.log('Navigation prop:', navigation); // Log to check navigation prop
    navigation.navigate("Details", { name });
  };

  return (
    <Pressable style={styles.card} onPress={handlePress}>
      {image && (
        <Image source={image} style={[styles.image, { borderRadius: 10 }]} />
      )}
      <View style={styles.textAndLove}>
        <Text style={styles.name}>{name}</Text>
        <Icon
          name="heart"
          size={18}
          color={isLiked ? COLORS.red : COLORS.gray}
          onPress={toggleLike}
        />
      </View>
      <View style={styles.deliveryAndRating}>
        <View style={styles.deliveryInfoContainer}>
          <Icon name="motorcycle" size={18} style={styles.icon} />
          <Text style={styles.deliveryInfo}>From ₦400 | 19-20min</Text>
        </View>
        <View>
          <Text style={styles.rating}>4.2 (167)</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    margin: 5,
    padding: 10,
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
  deliveryAndRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  rating: {
    fontWeight: "600",
  },
  textAndLove: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
