import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect  } from "react";
import {TouchableOpacity} from 'react-native';
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
import Styles from "../../assets/styles";
import { SearchBar, Input } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection:'row'
  },
});

const Home = () => {
  const [spinner, setSpinner] = useState(false);
  const [cats, setCats] = useState();
  
  const TopElements = () => {
    const navigation = useNavigation();

    return (
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin:20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar size={54} rounded source={require("../../assets/userpp.png")} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Holla, <Text style={{ fontWeight: "bold", fontSize: 20, color:'#FF5B22'}}>Difo</Text> Sunanda!</Text>
            <Text style={{ fontWeight: "normal", fontSize: 13, color: '#FECDA6' }}>Persian Cat Pawrents</Text>
          </View>
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Icon
            name="bell-o"
            backgroundColor="#fff"
            color="#000"
            size={20}
            onPress={() => navigation.navigate("Details", { name: val.name })}       />
        </View>
      </View>
    </>
    );
  };

  const SearchElement = () =>{
    return (
    <View style={{padding:20, borderRadius:20, flexDirection:'row'}}>
        <Input
        containerStyle={{width:'90%'}}
        inputContainerStyle={{borderWidth:1,borderRadius:20, paddingLeft:15,borderColor:'#D0D4CA',height:45}}
          placeholder='Search your favorite cats..'
          style={{borderRadius:10}}
          leftIcon={
          <Icon
            name='search'
            size={20}
            color='black'
          />
        }
        />
     <Icon
      style={{marginTop:2, borderRadius:10, height:40,width:40, paddingLeft:8, paddingTop:5}}
        name="sliders"
        backgroundColor="#FF9130"
        color="#fff"
        size={28}
        onPress={() => navigation.navigate("Details", { name: val.name })}       />
    </View>
    );
  }

  const Category = () => {
    
    const navigation = useNavigation();

    return (
      <View style={{flexDirection:'row', marginLeft:30,marginRight:30}}>
         <TouchableOpacity onPress={() => navigation.navigate("Cats",{name:"p"})}>
          <View style={{backgroundColor:'#FF9130', margin:5,padding:5, borderRadius:5, flexDirection:'column', alignItems:'center'}}>
            <Avatar  size={64} rounded source={require("../../assets/persian.jpg")} />
            <Text style={{color:'#fff', text:'centers', fontWeight:'bold'}}>Persian</Text>
          </View>
        </TouchableOpacity> 
        
        <TouchableOpacity onPress={() => navigation.navigate("Cats",{name:"do"})}>
        <View style={{backgroundColor:'#FECDA6', margin:5,padding:5, borderRadius:5, flexDirection:'column', alignItems:'center'}}>
        <Avatar  size={64} rounded source={require("../../assets/dom.jpg")} />
          <Text style={{color:'#fff', text:'centers', fontWeight:'bold'}}>Domestic</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Cats",{name:"ma"})}>
        <View style={{backgroundColor:'#FECDA6', margin:5,padding:5, borderRadius:5, flexDirection:'column', alignItems:'center'}}>
        <Avatar  size={64} rounded source={require("../../assets/main.jpg")} />
        <Text style={{color:'#fff', text:'centers', fontWeight:'bold'}}>Maincon</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Cats",{name:"br"})}>
        <View style={{backgroundColor:'#FECDA6', margin:5,padding:5, borderRadius:5, flexDirection:'column', alignItems:'center'}}>
        <Avatar  size={64}  rounded source={require("../../assets/bri4.jpg")} />
        <Text style={{color:'#fff', text:'centers', fontWeight:'bold'}}>British</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }

  const CategoryElement = () =>{
    return (
      <>
      <Text style={{marginLeft:30,marginTop:-20, fontWeight:'bold',fontSize:18}}>Cats Category</Text>
        <Category/>
      </>
    );
  }

  const Adoption = ({name, pic, origin, type}) =>{
    if(pic=='dom.jpg'){
      var imgPath = require("../../assets/dom.jpg")
    }else if(pic=='persian.jpg'){
      var imgPath = require("../../assets/persian.jpg")
    }else{
      var imgPath = require("../../assets/bri4.jpg")
    }

    return (
    <Card containerStyle={{borderRadius:10}}>
      <View style={{flexDirection:'row'}}>
        <Avatar  size={130} rounded 
        // source={imgPath} 
        source={imgPath}
        />
        <View>
          <View>
            <Text h3>{name}</Text>
            <Text style={{color:'#ddd', fontSize:17}}>{type}</Text>
          </View>
      
          <View style={{flexDirection:'row'}}>
          <Icon
          style={{marginTop:40}}
            name="map-pin"
            color="#FF9130"
            size={20}
            onPress={() => navigation.navigate("Details", { name: val.name })}/>
          <Text style={{marginTop:40,marginLeft:15, color:'#FF9130'}}>{origin}</Text>
          </View>
        </View>
      </View>
    </Card>
    );
  }

  const AdoptionsElement = () =>{
    return (
      <>
      <Text style={{marginLeft:30,marginTop:10,marginBottom:-8, fontWeight:'bold',fontSize:18}}>Looking for a Pawrents</Text>
      <Adoption name="Chiky" type="Domestic Cat" pic="dom.jpg" origin="Jakarta Selatan"/>
      <Adoption name="Percy" type="Persian Cat" pic="persian.jpg" origin="Bandung"/>
      <Adoption name="Kitty" type="British Cat" pic="brit3.jpg" origin="Padang"/>

      </>
    );
  }


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
        rightContainerStyle={{}}
        statusBarProps={{}}
      />
      <Spinner
        visible={spinner}
        textStyle={{ color: "#fff" }}
        color="#fff"
        overlayColor="rgba(0, 0, 0, 0.25)"
      />
      <ScrollView >
        <TopElements/>
        <SearchElement></SearchElement>
        <CategoryElement/>
        <AdoptionsElement/>
        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
};

export default Home;
