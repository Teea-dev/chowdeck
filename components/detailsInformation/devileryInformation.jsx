import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarIcon } from "../../assets/icons";

const DeliveryInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Preparation Time</Text>
        <Text style={styles.value}>15-25 min</Text>
        <BarIcon />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Rating</Text>
        <Text style={styles.value}>3.3 (38)</Text>
        <BarIcon />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Available Delivery Time</Text>
        <Text style={styles.value}>Instant Delivery</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
    padding: 10,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontWeight: "bold",
  },
  value: {
    color: "gray",
  },
});

export default DeliveryInformation;
