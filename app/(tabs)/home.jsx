import { View, Image, Pressable, Text, TextInput, ScrollView } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import * as Icon from "react-native-feather";
import COLORS from "../../constants/colors";
import { router } from 'expo-router'
import Tabs from '../../components/Profile/Tabs';  // Adjust the import path if necessary


const Home = () => {
  const Head = () =>{
    return (
        <View className="flex-row items-center space-x-2 px-4 pb-2 bg-white pt-2">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder='Delights' className="ml-2 flex-1" />
            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
              <Icon.MapPin height="20" width="20" stroke="gray" />
              <Text className="text-gray-600">Toledo City, Cebu</Text>
            </View>
          </View>
          <View style={{ backgroundColor: COLORS.darkred }} className="p-3 bg-gray-300 rounded-full">
            <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white" />
          </View>
        </View>
    )
  }

  const Header = () =>{
    return ( 
      <View style={{
                    backgroundColor: COLORS.white,                 
      }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 30, color: COLORS.darkred }}>MENU</Text>
        </View>
      </View>
    )
  }

  
  
  return (
    <SafeAreaView style={{flex:1}}>
      <Head />
      <Text style={{ paddingLeft: 10,
                     fontSize: 25,
                     fontWeight: 'bold',
                     color: COLORS.darkred,
                     backgroundColor: COLORS.white
       }}>Most Popular</Text>
       <Tabs />
       
    </SafeAreaView>
  )
}

export default Home
