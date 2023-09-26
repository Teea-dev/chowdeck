import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, icons } from '../../constants';

const Footer = () => {
  return (
    <View style={styles.icons}>
      <View style={styles.iconContainer}>
        <Icon name="home" size={25} color={COLORS.gray2} />
        <Text style={styles.iconText}>Home</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="search" size={25} color={COLORS.gray2} />
        <Text style={styles.iconText}>Search</Text>

      </View>
      <View style={styles.iconContainer}>
        <Icon name="shopping-cart" size={25} color={COLORS.gray2} />
        <Text style={styles.iconText}>Orders</Text>

      </View>
      <View style={styles.iconContainer}>
        <Icon name="support" size={25} color={COLORS.gray2} />
        <Text style={styles.iconText}>Support</Text>

      </View>
      <View style={styles.iconContainer}>
        <Icon name="user" size={25} color={COLORS.gray2} />
        <Text style={styles.iconText}>Profile</Text>

      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
    
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText:{
    fontSize:12,
    marginTop:5,
  }
});
