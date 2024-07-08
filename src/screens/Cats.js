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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Cats = ({ route }) => {
  const { name } = route.params;
  const [spinner, setSpinner] = useState(false);
  const [cats, setCats] = useState();
  
  useEffect(() => {
    setSpinner(true);
    const options = {
      headers: {
        "X-Api-Key": "luqt82fMtal6+609BzndrA==c0Rf0PknhEscx6ci",
      },
    };

    axios
      .get("https://api.api-ninjas.com/v1/cats?name="+name, options)
      .then((response) => {
        setSpinner(false);
        setCats(response.data);
        console.log("asd");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const GetCatDatas = () => {
    const navigation = useNavigation();

    return (
      <View>
        {cats?.map((val, key) => (
          <ListItem key={key} bottomDivider>
            <Text></Text>
            <Avatar rounded source={{ uri: val.image_link }} />
            <ListItem.Content>
              <ListItem.Title>{val.name}</ListItem.Title>
              <ListItem.Subtitle>{val.origin}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon.Button
              name="angle-right"
              backgroundColor="#fff"
              color="#000"
              onPress={() => navigation.navigate("Details", { name: val.name })}
            ></Icon.Button>
          </ListItem>
        ))}
      </View>
    );
  };


  return (
    <>
      <Header
        backgroundImag
        backgroundColor={"#FF9130"}
        eStyle={{}}
        barStyle="default"
        centerComponent={{
          text: "PawRents",
          style: { color: "#fff", fontWeight:'bold' },
        }}
        centerContainerStyle={{}}
        containerStyle={{ width: "100%" }}
        leftComponent={{ icon: "menu", color: "#fff" }}
        leftContainerStyle={{}}
        linearGradientProps={{}}
        placement="center"
        // rightComponent={{ icon: "home", color: "#fff" }}
        rightContainerStyle={{}}
        statusBarProps={{}}
      />
      <Spinner
        visible={spinner}
        textStyle={{ color: "#fff" }}
        color="#fff"
        overlayColor="rgba(0, 0, 0, 0.25)"
      />
      <ScrollView>
        <GetCatDatas />
        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
};

export default Cats;
