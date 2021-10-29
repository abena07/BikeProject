import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  Foundation,
  EvilIcons,
} from "@expo/vector-icons";
import NavBar from "../components/NavBar";

export default function Home({ navigation }) {
  const [details, setDetails] = useState([
    {
      name: "Pinarello Bike",
      price: "1,700.00",
      key: "1",
      image: require("../images/bike4.png"),
    },
    {
      name: "Brompton Bike",
      price: "1,500.00",
      key: "2",
      image: require("../images/bike5.png"),
    },
    {
      name: "Schwin Bike",
      price: "1,200.00",
      key: "3",
      image:require('../images/bike1.png'),
    },
    {
      name: "Norco Bike",
      price: "9,800.00",
      key: "4",
      image: require("../images/bike3.png"),
    },
  ]);
  const numColumns =2

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
      <View>
        <Text style={{ color: "grey", marginTop: 5 }}>
          {" "}
          The World's{" "}
          <Text style={{ color: "orange", fontWeight: "bold", fontSize: 20 }}>
            Best Bike
          </Text>
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 10,
          }}
        >
          Categories
        </Text>
      </View>
      {/* tabs */}
      <View style={styles.viewcontainer}>
        <Text style={styles.textcontainer}>All</Text>
        <Text style={styles.textcontainer}>Roadbike</Text>
        <Text style={styles.textcontainer}>Mountain</Text>
        <Text style={styles.textcontainer}>Urban</Text>
      </View>

      
      <FlatList
      numColumns={2}
      
      key={2}

        data={details}
        
        renderItem={({ item }) => (
          
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", { data: item })
            }
          >
            
            <View style={styles.viewcontainer}>
              <View style={styles.bikecontainer}>
                <View style={styles.heartcontainer}>
                  <EvilIcons name="heart" size={24} color="black" />
                </View>
                <View>
                  <Image source={item.image} style={styles.imagecontainer} />
                </View>
                <Text style={styles.text1container}>{item.name}</Text>

                <View style={styles.viewcontainer}>
                  <Foundation name="dollar" size={24} color="orange" />
                  <Text style={styles.text2container}>{item.price}</Text>
                </View>
              </View>
            </View>
            
     
          </TouchableOpacity>
          
        )}
      />
      <NavBar/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  textcontainer: {
    backgroundColor: "rgb(211,211,211)",
    color: "grey",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  bikecontainer: {
    backgroundColor: "rgb(211,211,211)",
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
    paddingVertical: 70,
    
    
  },

  imagecontainer: {
    flex: 1,
    width: 130,
    height:100,
    resizeMode: "contain",
  },
  text1container: {
    color: "grey",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft:5
  },
  text2container: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight:50
  },
  viewcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal:5,
    marginBottom:10
  },

  heartcontainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    position: "absolute",
    left: 90,
  },
});
