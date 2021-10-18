import React from "react";
import { View ,StyleSheet, Text} from "react-native";
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
          <Text style={styles.textcontainer}>All</Text>
          <Text style={styles.textcontainer}>Roadbike</Text>
          <Text style={styles.textcontainer}>Mountain</Text>
          <Text style={styles.textcontainer}>Urban</Text>
      </View>





    </View>

    
  );
  
}
const styles = StyleSheet.create({
    textcontainer: {
      backgroundColor:"rgb(211,211,211)",
       color:"grey", 
       borderRadius:5, paddingHorizontal:20,paddingVertical:5 ,justifyContent:"center", alignItems:"center", marginTop:5
    },
  });