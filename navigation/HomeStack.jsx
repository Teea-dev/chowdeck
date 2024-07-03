import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../app/(DefaultLayout)/home/HomeScreen';
// import DetailsScreen from '../screens/DetailsScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
  </HomeStack.Navigator>
);

export default HomeStackScreen;
