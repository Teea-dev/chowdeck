import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { Order, ChatRoundDots, Home, Search } from "../../assets/icons";

const Footer = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.icons}>
        <TouchableOpacity onPress={() => handleNavigation("Home")}>
          <View style={styles.iconContainer}>
            <Home />
            <Text style={styles.iconText}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Search")}>
          <View style={styles.iconContainer}>
            <Search />
            <Text style={styles.iconText}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Orders")}>
          <View style={styles.iconContainer}>
            <Order />
            <Text style={styles.iconText}>Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Support")}>
          <View style={styles.iconContainer}>
            <ChatRoundDots />
            <Text style={styles.iconText}>Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation("Profile")}>
          <View style={styles.iconContainer}>
            <Icon name="user" size={25} color={COLORS.gray2} />
            <Text style={styles.iconText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    position: "absolute", // Ensure the footer is fixed at the bottom
    bottom: 0, // Stick it to the bottom
    width: "100%", // Take full width
    backgroundColor: COLORS.white, // Footer background color
    paddingVertical: 10, // Vertical padding for the footer
    alignItems: "center", // Center align items horizontally
  },
  icons: {
    flexDirection: "row", // Row direction for icons
    justifyContent: "space-around", // Evenly space the icons
    width: "100%", // Take full width within the container
  },
  iconContainer: {
    alignItems: "center", // Center align each icon container
    flex: 1, // Flex to take equal space
  },
  iconText: {
    fontSize: 12, // Font size for icon text
    marginTop: 5, // Margin top for text
    color: COLORS.gray2, // Text color
  },
});
