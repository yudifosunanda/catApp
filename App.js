import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CoverImg } from "./assets/cover.jpg";
import {
  StyleSheet,
  // Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Header, ListItem, Avatar, Text } from "@rneui/base";
import { AirbnbRating, Card, Button } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import Tabs from "./src/components/Tabs";
import Cats from "./src/screens/Cats";
import CatDetails from "./src/screens/CatDetails";

const Galery = () => {};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Cover = () => {
  const navigation = useNavigation();
  
  return (
    <>
      <View style={{backgroundColor:'#fff'}}>
        <Image
          style={{
            width: 300,
            height: 350,
            alignSelf: "center",
            marginTop: 150,
          }}
          source={require("./assets/cover.png")}
        />
        <Text style={{ textAlign: "center" }} h2>
          Find Anything About Your Cats
        </Text>
        <Text style={{ textAlign: "center", fontStyle: "italic" }}>
          Because everything about them is Important
        </Text>
        <Button
          title="GET STARTED"
          buttonStyle={{
            backgroundColor: "#FF9130",
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
            height: 60,
            width: 250,
          }}
          containerStyle={{
            width: 300,
            marginHorizontal: 70,
            marginVertical: 40,
          }}
          titleStyle={{ fontWeight: "bold" }}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </>
  );
};

const App = () => {
  return (
    <NavigationContainer theme={{  colors: {
      background: "#fff"
    }}} >
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        })}
      >
        <Stack.Screen name="Cover" component={Cover} />
        <Stack.Screen name="Home" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
