import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'
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
                            source={require("../../assets/images/drink1.jpg")}
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
                            }}>Coker</Text>
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
                                    }}>₱30</Text>
      
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
                            source={require("../../assets/images/pineapple.jpg")}
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
                            }}>Pineapple</Text>
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
                                    }}>₱76</Text>
      
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
                            source={require("../../assets/images/lemonade.jpg")}
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
                                    }}>₱50</Text>
      
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
                            source={require("../../assets/images/cokefloat.jpg")}
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
                            }}>Coke Float</Text>
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
                                    }}>₱89</Text>
      
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




