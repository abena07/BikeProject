import React ,{useState} from "react";
import { StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";


export default function Home({navigation}){
    const [details, setDetails] = useState([
        {name:'Pinarello Bike',price:'1,700.00',key:'1'},
    {name:'Brompton Bike',price:'1,500.00',key:'2'},
  {name:'Schwin Bike',price:'1,200.00',key:'3'},
  {name:'Norco Bike',price:'9,800.00',key:'4'},
  ])

  return(
      <View>
           <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
      </View>
          <FlatList data ={details} renderItem={({item})=>(
              <TouchableOpacity onPress={()=> navigation.navigate('ProductDetais', item)} >
                  <Card>

                  </Card>
              </TouchableOpacity>
          )}/>
      </View>

  );
  
}