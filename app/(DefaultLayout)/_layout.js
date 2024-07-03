import { Tabs } from "expo-router";
import { Order, ChatRoundDots, Home, Search, Profile } from "../../assets/icons";
import React from "react";

export default function RootLayout() {
  return (
    <>

    <Tabs screenOptions={{ tabBarActiveTintColor: "#0C513F" }}>
      <Tabs.Screen
      
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
          headerShown: false,

        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="order"  
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size }) => <Order color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          tabBarLabel: "Support",
          tabBarIcon: ({ color, size }) => <ChatRoundDots color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => <Profile color={color} size={size} />,
        }}
      />
    </Tabs>
    </>

  );
}
