import React, { useState } from "react";
import { StyleSheet,View,Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";


export default function Tabs(){
    const [categories,setCategories]= useState([
        {name:"All",key:"1"},
        {name:"Roadbike", key:"2"},
        {name:"Mountain",key:"3"},
        {name:"Urban", key:"4"},
    {name:"MotorBikes", key:"5"}
    ])
    return(
        <View>
            <FlatList
           
            horizontal={true}
             data ={categories} renderItem={({item})=>(
                  <View style={styles.viewcontainer}>
                  <Text style={styles.textcontainer}>{item.name}</Text>
                 
                </View>
            )} />
        </View>
    )
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
  
   
  
   
    viewcontainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal:5
   
    },
  
   
  });
  