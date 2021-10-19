import React from "react";
import { View ,StyleSheet, Text,Image} from "react-native";
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
      
      <View style={styles.viewcontainer}>
          <Text style={styles.textcontainer}>All</Text>
          <Text style={styles.textcontainer}>Roadbike</Text>
          <Text style={styles.textcontainer}>Mountain</Text>
          <Text style={styles.textcontainer}>Urban</Text>
      </View>

      <View style={styles.viewcontainer}>
        <View style={styles.bikecontainer}>
          <Image style={styles.imagecontainer} source={require("./images/bike4.png")}/>
        <Text style={styles.text1container}>Pinarello Bike</Text>
        <Text style={styles.text2container}>1,700.00</Text>
        </View>
        <View style={styles.bikecontainer}>
        <Image style={styles.imagecontainer} source={require("./images/bike5.png")}/>
        <Text style={styles.text1container}>Brompton Bike</Text>
        <Text style={styles.text2container}>1,500.00</Text>
        </View>

      </View>

      <View style={styles.viewcontainer}>
        <View style={styles.bikecontainer}>
          <Image style={styles.imagecontainer} source={require("./images/bike1.png")}/>
          <Text style={styles.text1container}>Schwinn Bike</Text>
        <Text style={styles.text2container}>1,200.00</Text>
        </View>
        <View style={styles.bikecontainer}>
        <Image style={styles.imagecontainer} source={require("./images/bike3.png")}/>
        <Text style={styles.text1container}>Norco Bike</Text>
        <Text style={styles.text2container}>9,800.00</Text>
        </View>

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

    bikecontainer:{
      backgroundColor:"rgb(211,211,211)",
      borderRadius:5,
      justifyContent:"center",
      alignItems:"center",
      marginTop:5,
      paddingHorizontal:15,
      paddingVertical:20,
     
    },

    imagecontainer:{
      flex: 1,
    width: 140,
    height: 210,
    resizeMode: 'contain'
      
     
    },
    text1container:{
      color:"grey",
      fontSize:16,
      fontWeight:500
      
    },
    text2container:{
      fontWeight:"bold",
      fontSize:18
    },
    viewcontainer:{
      flexDirection:"row", 
      justifyContent:"space-between"
      
    }
  });