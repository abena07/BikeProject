import React from "react";
import { View, Text, Image,TouchableOpacity  } from "react-native";

import { AntDesign } from "@expo/vector-icons";


export default function LandingPage({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 20,
          marginBottom: 30,
          marginTop: 10,
          transform: [{ rotate: "-45deg" }],
        }}
        source={require("../images/bike2.jpg")}
      />
      <Text style={{ color: "grey", fontSize: 30 }}>Welcome To</Text>
      <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>
        Power Bike Shop
      </Text>
     
       
      <TouchableOpacity
        style={{
          backgroundColor: "e3e3e3",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 60,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <AntDesign name="google" size={24} color="red" />
        <Text style={{ fontSize: 17, marginLeft: 15 }}>Login with Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
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
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 17, marginLeft: 15 }}>
          Login with Apple
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ marginTop: 10, fontSize: 16, color: "grey" }}>
          {" "}
          Not a member? {""}
          <Text style={{ color: "orange", fontWeight: "bold" }}>SignUp</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
