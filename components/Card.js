import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  Foundation,
  EvilIcons,
} from "@expo/vector-icons";

export default function Card(props) {
  return (
    <View style={styles.viewcontainer}>
      <View style={styles.bikecontainer}>
        <Text>{props.children}</Text>
      </View>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 100,
  },

  imagecontainer: {
    flex: 1,
    width: 140,
    height: 170,
    resizeMode: "contain",
  },
  text1container: {
    color: "grey",
    fontSize: 16,
    fontWeight: "bold",
  },
  text2container: {
    fontWeight: "bold",
    fontSize: 18,
  },
  viewcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heartcontainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    position: "relative",
    left: 50,
  },
});
