
import React, { useState } from 'react';
import {  View, TextInput, StyleSheet,  } from 'react-native';
import { FontAwesome, Ionicons  } from '@expo/vector-icons';

export default function EmailInput() {


    const[email,setEmail]= useState();
    
  return (
    <View style={styles.inputContainer} >
        {/* email */}
      <View style={styles.iconContainer}>
      <Ionicons name="ios-mail-sharp" size={24} color="black" />
      </View>
      <TextInput 
      numberOfLines={1}
      placeholder="Email"
      keyboardType="email-address"
      style={styles.input}
      placeholderTextColor="#666"
      autoCapitalize="none"
      autoCompleteType={false}
      labelValue={email}
      onChangeText={(userEmail) => setEmail(userEmail)}/>
      

   
    </View>
  );
}


const styles =StyleSheet.create({
    inputContainer:{
        marginBottom:10,
        marginTop:5,
        width:"80%",
        borderColor:"#ccc",
        borderRadius:3,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"fff",
        
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
        width:70,
        height:50
        
    }
})

