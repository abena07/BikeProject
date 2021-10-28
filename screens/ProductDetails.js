import React from "react";

import { Text,StyleSheet , View, Image} from "react-native";
import Card from "../components/Card";

export default function ProductDetails({navigation, route}){
     const {name, price, image} = route.params.data;
    return (
        <View style={{ flex:1}}>
            <Card>
                
                <Text>{name}</Text>
               <Text>{price}</Text>
               <Image>{image}</Image>
                
              
            </Card>
        </View>
    )
}