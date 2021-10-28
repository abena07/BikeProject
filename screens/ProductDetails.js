import React from "react";

import { Text,StyleSheet , View} from "react-native";
import Card from "../components/Card";

export default function ProductDetails({navigation, route}){
     const {name} = route.params.data;
    return (
        <View style={{ flex:1}}>
            <Card>
                
                <Text>{name}</Text>
               
                
              
            </Card>
        </View>
    )
}