import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'
import { router } from 'expo-router'

const Profile = () => {

const Boxes = () => {
  return (
    <View style={{}}>
    <View style={{ 
      backgroundColor: COLORS.white,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  justifyContent: 'space-evenly',
                  height: '100%',
                  alignItems: 'center',
                }}>


        <View style={{width: '48%',
        height: '50%',
         alignItems: 'center',
        justifyContent: 'center',
        padding:5,
      }}>
          <View style={{height: '100%',
                      width: '100%',
                      padding: 6,
                      backgroundColor: 'white',
                      borderRadius: 15,
                      elevation: 5,
        }}>
            <View style={{flex: 1,}}>
                <View style={{flex: 1, backgroundColor: COLORS.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15
                
                }}> 
                    <Image
                      source={require("../../assets/images/burger.jpeg")}
                          style={{flex: 1,
                                  width: '100%',
                                  height: 200,
                                  borderRadius: 15,
                                  
                          }}/>
                </View>
            </View>
            
           <View style={{
                         alignItems: 'flex-start',
                         marginTop: 1
                        }}>
                <Text style={{
                      fontSize: 15,
                      fontWeight: '600',
                      }}>Cheese Burger</Text>
            </View>  

            <View style={{
                              flexDirection: 'row',
                              display: 'flex',
                          borderRadius: 15,
                          backgroundColor: COLORS.white
                        }}>
              <Text style={{ fontSize: 20,
                              fontWeight: 'bold', 
                              color: COLORS.darkred, 
                              }}>₱126</Text>

              <Pressable style={{   flex: 1,
                                    justifyContent: 'flex-end',
                                    backgroundColor: COLORS.white, 
                                    paddingRight: 5,
                                    borderRadius: 10,
                                    flexDirection: 'row'}}
                                    onPress={() => router.push('../../burgerdetail')}>
                                <Text style={{fontSize: 25, color: COLORS.darkred}}>+</Text>
                            </Pressable>

            </View>
                          
          </View>
        </View>

        <View style={{width: '48%',
        height: '50%',
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:5
      }}>
          <View style={{height: '100%',
                      width: '100%',
                      padding: 6,
                      backgroundColor: 'white',
                      borderRadius: 15,
                      elevation: 5,
        }}>
            <View style={{flex: 1,}}>
                <View style={{flex: 1, backgroundColor: COLORS.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15
                
                }}> 
                    <Image
                      source={require("../../assets/images/burger3.jpg")}
                          style={{flex: 1,
                                  width: '100%',
                                  height: 200,
                                  borderRadius: 15,
                                  
                          }}/>
                </View>
            </View>
            
           <View style={{
                         alignItems: 'flex-start',
                         marginTop: 1
                        }}>
                <Text style={{
                      fontSize: 15,
                      fontWeight: '600',
                      }}>Ham Burger</Text>
            </View>  

            <View style={{
                              flexDirection: 'row',
                              display: 'flex',
                          borderRadius: 15,
                          backgroundColor: COLORS.white
                        }}>
              <Text style={{ fontSize: 20,
                              fontWeight: 'bold', 
                              color: COLORS.darkred, 
                              }}>₱180</Text>

              <Pressable style={{   flex: 1,
                                    justifyContent: 'flex-end',
                                    backgroundColor: COLORS.white, 
                                    paddingRight: 5,
                                    borderRadius: 10,
                                    flexDirection: 'row'}}>
                                <Text style={{fontSize: 25, color: COLORS.darkred}}>+</Text>
                            </Pressable>

            </View>
                          
          </View>
        </View>

        <View style={{width: '48%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        padding:5
      }}>
          <View style={{height: '100%',
                      width: '100%',
                      padding: 6,
                      backgroundColor: 'white',
                      borderRadius: 15,
                      elevation: 5,
        }}>
            <View style={{flex: 1,}}>
                <View style={{flex: 1, backgroundColor: COLORS.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15
                
                }}> 
                    <Image
                      source={require("../../assets/images/chickenburger.jpeg")}
                          style={{flex: 1,
                                  width: '100%',
                                  height: 200,
                                  borderRadius: 15,
                                  
                          }}/>
                </View>
            </View>
            
           <View style={{
                         alignItems: 'flex-start',
                         marginTop: 1
                        }}>
                <Text style={{
                      fontSize: 15,
                      fontWeight: '600',
                      }}>Chicken Burger</Text>
            </View>  

            <View style={{
                              flexDirection: 'row',
                              display: 'flex',
                          borderRadius: 15,
                          backgroundColor: COLORS.white
                        }}>
              <Text style={{ fontSize: 20,
                              fontWeight: 'bold', 
                              color: COLORS.darkred, 
                              }}>₱150</Text>

              <Pressable style={{   flex: 1,
                                    justifyContent: 'flex-end',
                                    backgroundColor: COLORS.white, 
                                    paddingRight: 5,
                                    borderRadius: 10,
                                    flexDirection: 'row'}}>
                                <Text style={{fontSize: 25, color: COLORS.darkred}}>+</Text>
                            </Pressable>

            </View>
                          
          </View>
        </View>
        
        <View style={{width: '48%',
        height: '50%',
        marginVertical: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:5
      }}>
          <View style={{height: '100%',
                      width: '100%',
                      padding: 6,
                      backgroundColor: 'white',
                      borderRadius: 15,
                      elevation: 5,
        }}>
            <View style={{flex: 1,}}>
                <View style={{flex: 1, backgroundColor: COLORS.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15
                
                }}> 
                    <Image
                      source={require("../../assets/images/overload.webp")}
                          style={{flex: 1,
                                  width: '100%',
                                  height: 200,
                                  borderRadius: 15,
                                  
                          }}/>
                </View>
            </View>
            
           <View style={{
                         alignItems: 'flex-start',
                         marginTop: 1
                        }}>
                <Text style={{
                      fontSize: 15,
                      fontWeight: '600',
                      }}>Large Chicken Burger</Text>
            </View>  

            <View style={{
                              flexDirection: 'row',
                              display: 'flex',
                          borderRadius: 15,
                          backgroundColor: COLORS.white
                        }}>
              <Text style={{ fontSize: 20,
                              fontWeight: 'bold', 
                              color: COLORS.darkred, 
                              }}>₱256</Text>

              <Pressable style={{   flex: 1,
                                    justifyContent: 'flex-end',
                                    backgroundColor: COLORS.white, 
                                    paddingRight: 5,
                                    borderRadius: 10,
                                    flexDirection: 'row'}}>
                                <Text style={{fontSize: 25, color: COLORS.darkred}}>+</Text>
                            </Pressable>

            </View>
            </View>
                          
          </View>
        </View>

    </View>
  )
}
return (
  <View>
    <Boxes/>
  </View>
)
}
export default Profile











// import { View, Text } from 'react-native'
// import React from 'react'
// import COLORS from '../../constants/colors'
// import { VStack, FormControl, ScrollView, Input } from 'native-base';

// const Inputs = [
//   {
//     Label: "USERNAME",
//   }
// ]

// const Profiles = () => {
//   return (
//     <View style={{backgroundColor: COLORS.white, padding: 5}}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <VStack space={10} mt={5} pb={10}>
//           <FormControl>
//           <FormControl.Label
//           _text={{
//             fontSize: "12px",
//             fontWeight: "bold",
//           }}> 
//           USERNAME
//           </FormControl.Label>
//           <Input borderWidth={0} 
//           bg={COLORS.darkred}
//           py={3} 
//           color={COLORS.primary} 
//           fontSize={15} 
//           _focus={{
//             bg: COLORS.black,
//             borderColor:COLORS.black,
//             borderWidth: 1,
//           }}/>
//           </FormControl>
//       </VStack>
//       </ScrollView>
//     </View>
//   )
// }

// export default Profiles