import React from 'react'
import { View, StyleSheet,TouchableOpacity} from 'react-native'
import { FontAwesome,Ionicons,Entypo  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function NavBar() {
    const navigation = useNavigation();
    return (
       <View stye={styles.main}>
           <View style={styles.subview}>
         
           <FontAwesome name="home" size={24} color="black" />
          
           <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 60,
          height: 60,
          position: "relative",
          zIndex: -1,
          top: "-10%",
          backgroundColor: "black",
          borderRadius: 50,
        }}
      >
           <Ionicons name="ios-settings-sharp" size={24} color="white" />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
           
           <Entypo name="shopping-cart" size={24} color="black" />
           </TouchableOpacity>

           </View>
         
       </View>
    )
}

const styles = StyleSheet.create({
main:{
    
    
    


},
subview:{
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee",
 
    height: 50,
    width:370,
    position: "absolute",
    bottom:0,
    right:0,

    paddingVertical: 10,
}

})
