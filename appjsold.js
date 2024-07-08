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

const API = () => {
  const [quote, setQuote] = useState("");
};

const GetCatDetails = ({ navigation }) => {
  const [cat, setCat] = useState();

  useEffect(() => {
    const options = {
      headers: {
        "X-Api-Key": "luqt82fMtal6+609BzndrA==c0Rf0PknhEscx6ci",
      },
    };
    axios
      .get("https://api.api-ninjas.com/v1/cats?name=a", options)
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      {cats?.map((val) => (
        <ListItem bottomDivider>
          <Text></Text>
          <Avatar source={{ uri: val.image_link }} />
          <ListItem.Content>
            <ListItem.Title>{val.name}</ListItem.Title>
            <ListItem.Subtitle>{val.origin}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

const GetCatDatas = () => {
  const [cats, setCats] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const options = {
      headers: {
        "X-Api-Key": "luqt82fMtal6+609BzndrA==c0Rf0PknhEscx6ci",
      },
    };
    axios
      .get("https://api.api-ninjas.com/v1/cats?name=a", options)
      .then((response) => {
        setCats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      {cats?.map((val, key) => (
        <ListItem key={key} bottomDivider>
          <Text></Text>
          <Avatar source={{ uri: val.image_link }} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Cats = () => {
  return (
    <>
      <ScrollView>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          Hello Cat Lovers!
        </Text>
        <GetCatDatas />
        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
};

const CatDetails = ({ route }) => {
  const navigation = useNavigation();
  const { name } = route.params;
  const [cat, setCat] = useState();

  useEffect(() => {
    const options = {
      headers: {
        "X-Api-Key": "luqt82fMtal6+609BzndrA==c0Rf0PknhEscx6ci",
      },
    };
    axios
      .get("https://api.api-ninjas.com/v1/cats?name=" + name, options)
      .then((response) => {
        setCat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
                <Icon name="info-circle" size={17} color="#F875AA" style={{margin:5}} />
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
              color='#F875AA'
            />
          </>
        ) : (
          <Text>Loading data...</Text>
        )}
      </ScrollView>
    </>
  );
};

const Galery = () =>{
  
}



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreens = () => {
  return (
    <Stack.Navigator screenOptions={({ route }) => ({
      headerShown: false
    })}>
      <Stack.Screen name="Home" component={Cats} />
      <Stack.Screen name="Details" component={CatDetails} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <>
      <Header
        backgroundImag
        backgroundColor={'#F875AA'}
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
        rightComponent={{ icon: "home", color: "#fff" }}
        rightContainerStyle={{}}
        statusBarProps={{}}
      />
      <NavigationContainer>  
        <Tab.Navigator
        screenOptions={({ route }) => ({
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
          tabBarActiveTintColor: '#F875AA',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
          <Tab.Screen name="Home" component={HomeScreens} />
          <Tab.Screen name="Galery" component={Galery} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
