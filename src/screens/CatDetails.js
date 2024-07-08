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

const CatDetails = ({ route }) => {
  const navigation = useNavigation();
  const { name } = route.params;
  const [cat, setCat] = useState();
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    const options = {
      headers: {
        "X-Api-Key": "luqt82fMtal6+609BzndrA==c0Rf0PknhEscx6ci",
      },
    };
    axios
      .get("https://api.api-ninjas.com/v1/cats?name=" + name, options)
      .then((response) => {
        setSpinner(false);
        setCat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header
        backgroundImag
        backgroundColor={"#FF9130"}
        eStyle={{}}
        barStyle="default"
        centerComponent={{
          text: "PawRents",
          style: { color: "#fff" },
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
        {cat ? (
          <>
            <Text style={{ textAlign: "center" }} h3>
              {cat[0].name}
            </Text>
            <Image
              style={{
                width: 350,
                height: 250,
                alignSelf: "center",
                borderRadius: 20,
              }}
              source={{ uri: cat[0].image_link }}
            />
            <Card>
              <Card.Title>
                <Icon
                  name="info-circle"
                  size={17}
                  color="#3FC1C9"
                  style={{ margin: 5 }}
                />
                Paw Info
              </Card.Title>
              <Card.Divider />
              <Text style={{ marginLeft: 10, marginRight: 10 }}>
                <Text style={{ fontWeight: "bold" }}>"{cat[0].name}"</Text>
                <Text>
                  {" "}
                  cat, scientifically known as Felis catus, is a small
                  domesticated mammal often kept as a pet. Cats are known for
                  their graceful and agile nature. They have a wide variety of
                  coat colors and patterns and come in different breeds. Cats
                  are popular pets for their playful and independent
                  personalities.
                </Text>
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: "bold",
                  alignSelf: "center",
                  marginBottom: 10,
                }}
              >
                Family Friendly
              </Text>
              <AirbnbRating
                isDisabled={true}
                defaultRating={cat[0].family_friendly}
                showRating={false}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: "bold",
                  alignSelf: "center",
                  marginBottom: 10,
                }}
              >
                Playfulness
              </Text>
              <AirbnbRating
                isDisabled={true}
                defaultRating={cat[0].playfulness}
                showRating={false}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: "bold",
                  alignSelf: "center",
                  marginBottom: 10,
                }}
              >
                Inteligence
              </Text>
              <AirbnbRating
                isDisabled={true}
                defaultRating={cat[0].intelligence}
                showRating={false}
              />
            </Card>
            <Button
              title="Go to Home"
              onPress={() => navigation.navigate("Home")}
              color="#3FC1C9"
            />
          </>
        ) : ""}
      </ScrollView>
    </>
  );
};

export default CatDetails;
