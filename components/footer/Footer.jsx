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
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  iconContainer: {
    alignItems: "center",
    flex: 1,
  },
  iconText: {
    fontSize: 12,
    marginTop: 5,
    color: COLORS.gray2,
  },
});
