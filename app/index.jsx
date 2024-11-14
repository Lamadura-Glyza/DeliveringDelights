import { Text, View, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/CustomButton'
import COLORS from '../constants/colors'
import { router, Redirect, Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'



const Index = ({}) => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar barStyle="dark-content"/>
     <View style={{ flex: 1 }}>
        <Text style={{alignSelf: 'center', marginTop: 50,
                      fontSize: 35, fontWeight: 900, color: COLORS.darkred,
        }}>Delivering Delights</Text>
                <View style={{ flex: 0.5, backgroundColor: COLORS.white, top: 20}}> 
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={{
                            height: 300,
                            width: 350,
                            borderRadius: 90,
                            alignSelf: 'center',
                            top: 10}}/>
                </View>
                

            <View style={{ backgroundColor: COLORS.white,
                           flex: 0.5
                    }}>
                      <View style={{paddingHorizontal:10}}>
                    <Text style={{
                        marginTop: 20,
                        fontSize: 30,
                        fontWeight: 800,
                        color: COLORS.darkred}}>Delivering joy,</Text>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 800,
                        color: COLORS.darkred}}>one bite at a time</Text>
                      
               
            <View style={{ top:5 }}>
                    <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            marginVertical: 4}}>Pick your desired food item from the menu </Text>
                         <Text style={{
                            fontSize: 16,
                            color: COLORS.black,
                            marginVertical: 4}}>Delightful bites, direct to your delight</Text>
            </View>
              
                 <Button title="Log In to Account"
                         onPress={() => router.push('./sign-in')}
                         style={{
                            marginTop: 30,
                            backgroundColor: 'black'          
                            }}/>
          <Link style={{color: COLORS.darkred}}
                className= "text-center font-extrabold py-3 text-lg" href="./sign-up"> Register
              
          </Link>
          </View>
      
          </View>
            </View>
            
        </SafeAreaView>
        
    
  )
}

export default Index
