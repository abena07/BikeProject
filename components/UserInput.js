
import React, { useState } from 'react';
import {  View, TextInput, StyleSheet,  } from 'react-native';
import {   FontAwesome5 } from '@expo/vector-icons';

export default function UserInput() {


    const[user,setUser]= useState();
    
  return (
    <View style={styles.inputContainer} >
        {/* password */}
      <View style={styles.iconContainer}>
      <FontAwesome5 name="user-alt" size={24} color="black" />
      </View>
      <TextInput 
      numberOfLines={1}
      style={styles.input}
      placeholderTextColor="#666"
      placeholder="UserName"
    
      labelValue={user}
      onChangeText={(userName) => setUser(userName)}/>
      
    
   
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
        backgroundColor:"fff",
        // height
    },

    iconContainer:{
        padding:10,
        height:"100%",
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
        fontFamily:"Lato-Regular",
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

