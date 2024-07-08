import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  // Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import { Header, ListItem, Avatar, Text } from "@rneui/base";
import { AirbnbRating, Card } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import Cats from '../screens/Cats';
import Home from '../screens/Home';
import CatDetails from '../screens/CatDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreens = () => {
  return (
    <>
    <Stack.Navigator screenOptions={({ route }) => ({
      headerShown: false
    })}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cats" component={Cats} />
      <Stack.Screen name="Details" component={CatDetails} />
    </Stack.Navigator>
    </>
  );
}

const Galery = () =>{
  
}


const Tabs = () => {
  return (
    <>
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            paddingHorizontal: 5,
            paddingTop: 5,
            backgroundColor: '#fff',
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Galery') {
              iconName = focused ? 'image' : 'image-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF9130',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
          <Tab.Screen name="Home" component={HomeScreens} />
          <Tab.Screen name="Galery" component={Galery} />
        </Tab.Navigator>
    </>
  );
};

export default Tabs;
