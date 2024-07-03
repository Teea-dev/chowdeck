import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../app/(sreens)/screens/SearchScreen';
// Add more screens if necessary
const SearchStack = createStackNavigator();

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} />
    {/* Add more screens as needed */}
  </SearchStack.Navigator>
);

export default SearchStackScreen;
