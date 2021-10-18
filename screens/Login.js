
import React from 'react';
import {  View, Text, Image } from 'react-native';

export default function Login() {
  return (
    <View style ={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Image 
      style={{width:150,
      height:150,
      borderRadius:10,
      marginBottom:20,}}
      source ={require("./images/bike2.jpg")}/>
      <Text style={{color: "rgba(0,0,0,0.6", fontSize:24}}>Welcome To</Text>
      <Text style={{color:"black", fontSize: 30 ,fontWeight:"600"}}>Power Bike Shop</Text>
    </View>
  );
}


