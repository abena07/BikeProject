import React from "react";
import { StyleSheet, View , TouchableOpacity,Text} from "react-native";
import EmailInput from "../components/EmailInput";
import PassowordInput from "../components/PasswordInput";
import UserInput from "../components/UserInput";


export default function Login({navigation}){
    return(
        <View     style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}>
             <EmailInput/>
            <UserInput/>
            <PassowordInput/>
           
            <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          backgroundColor: "black",
          padding: 10,
          paddingHorizontal: 60,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
       
        <Text style={{ color: "white", fontSize: 17, marginLeft: 15 }}>
          Login 
        </Text>
      </TouchableOpacity>
        </View>
    )
}

