
import React, { useState } from 'react';
import {  View, TextInput, StyleSheet,  } from 'react-native';
import {  Ionicons  } from '@expo/vector-icons';

export default function PassowordInput() {


    const[password,setPassword]= useState();
    
  return (
    <View style={styles.inputContainer} >
        {/* password */}
      <View style={styles.iconContainer}>
      <Ionicons name="ios-lock-closed" size={24} color="black" />
      </View>
      <TextInput 
      numberOfLines={1}
      style={styles.input}
      placeholderTextColor="#666"
      placeholder="Password"
      secureTextEntry={true}
      labelValue={password}
      onChangeText={(userPassword) => setPassword(userPassword)}/>
      
    
   
    </View>
  );
}


const styles =StyleSheet.create({
    inputContainer:{
        marginBottom:10,
        marginTop:5,
        width:'80%',
        borderColor:"#ccc",
        borderRadius:3,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"rgb(255,255,255)",

        // height
    },

    iconContainer:{
        padding:10,
      
        justifyContent:"center",
        alignItems:"center",
        borderRightColor:"#ccc",
        borderRightWidth:1,
        width:50,


    },
    input:{
        padding:10,
        fontSize:16,
        flex:1,
       
        color:"#333",
        justifyContent:"center",
        alignItems:"center"
    },
    inputField:{
        padding:10,
        marginTop:5,
        marginBottom:10,
        fontSize:16,
        borderRadius:8,
        borderWidth:1,
        // width
        // hwight
        
    }
})

