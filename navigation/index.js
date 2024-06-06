import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import stack navigators
import HomeStackScreen from './HomeStack';
import SearchStackScreen from './searchStack';
// import OrdersStackScreen from './OrdersStack';
// import SupportStackScreen from './SupportStack';
// import ProfileStackScreen from './ProfileStack';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Search') {
              iconName = 'search';
            } else if (route.name === 'Orders') {
              iconName = 'list';
            } else if (route.name === 'Support') {
              iconName = 'question-circle';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        
        })}
       
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchStackScreen} />
        {/* <Tab.Screen name="Orders" component={OrdersStackScreen} />
        <Tab.Screen name="Support" component={SupportStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
