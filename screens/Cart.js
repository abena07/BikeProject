import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  Foundation,
  EvilIcons,
  Feather,
} from "@expo/vector-icons";

import NavBar from "../components/NavBar";

export default function Cart() {
  const [details, setDetails] = useState([
    {
      name: "Pinarello Bike",
      price: "1,700.00",
      key: "1",
      image: require("../images/bike4.png"),
    },
    {
      name: "Brompton Bike",
      price: "1,500.00",
      key: "2",
      image: require("../images/bike5.png"),
    },
    {
      name: "Schwin Bike",
      price: "1,200.00",
      key: "3",
      image: require("../images/bike1.png"),
    },
    {
      name: "Norco Bike",
      price: "9,800.00",
      key: "4",
      image: require("../images/bike3.png"),
    },
  ]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cart list</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </View>
      <View
        style={{
          fontSize: 20,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "#aaa" }}>(3 items)</Text>
      </View>
      <FlatList
        numColumns={1}
        key={2}
        data={details}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetails", { data: item })
            }
          >
            <View style={styles.viewcontainer}>
              <View style={styles.bikecontainer}>
                <View>
                  <Image source={item.image} style={styles.imagecontainer} />
                </View>
              </View>
              <View style={{ flexDirection: "row", flex: 1 }}>
                <View>
                  <Text style={styles.text1container}>{item.name}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Foundation name="dollar" size={24} color="orange" />
                    <Text style={styles.text2container}>{item.price}</Text>
                  </View>
                  <View></View>
                </View>
              </View>
              <Feather name="trash-2" size={24} color="orange" />
              <View style={styles.itemCounter}>
                <TouchableOpacity style={styles.counter}>
                  <Text style={{ color: "#fff" }}>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity style={styles.counter}>
                  <Text style={{ color: "#fff" }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <NavBar />
    </View>
  );
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

  bikecontainer: {
    backgroundColor: "rgb(211,211,211)",
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 5,
    paddingVertical: 20,
  },

  counter: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#000",
  },
  itemCounter: {
    width: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  imagecontainer: {
    flex: 1,
    width: 65,
    height: 50,
    resizeMode: "contain",
  },
  text1container: {
    color: "grey",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
  text2container: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 50,
  },
  viewcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginBottom: 10,
  },

  heartcontainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    position: "absolute",
    left: 90,
  },
});

