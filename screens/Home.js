import React from "react";
import { View , Text} from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Home(params) {
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
          <Text style={{color:"grey", marginTop:5,}}> The World's <Text style={{color:"orange",fontWeight:"bold", fontSize:20}}>Best Bike</Text></Text>
      </View>

      <View>
          <Text style={{color:"black", fontWeight:"bold", fontSize:15, marginTop:10}}>Categories</Text>
      </View>
      
      <View style={{flexDirection:"row",justifyContent:"space-between" }}>
          <Text style={{backgroundColor:"rgb(211,211,211)", color:"orange", borderRadius:5, padding:5}}>All</Text>
          <Text style={{backgroundColor:"rgb(211,211,211)", color:"grey", borderRadius:5, padding:5}}>Roadbike</Text>
          <Text style={{backgroundColor:"rgb(211,211,211)", color:"grey", borderRadius:5, padding:5}}>Mountain</Text>
          <Text style={{backgroundColor:"rgb(211,211,211)", color:"grey", borderRadius:5, padding:5}}>Urban</Text>
      </View>

      
    </View>
  );
}