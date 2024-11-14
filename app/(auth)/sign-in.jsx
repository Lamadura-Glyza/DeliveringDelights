import { View, Text, Image , Pressable, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../../components/CustomButton';
import { router, Redirect, Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar';


const SignIn = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
         <StatusBar barStyle=""/>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.primary,
                        marginTop: 50,
                        alignSelf: 'center'}}>Log In To Your Account  
                    </Text>
                     <Text style={{
                        fontSize: 16,
                        color: COLORS.primary,
                        alignSelf: 'center'}}>Hello again you have been missed!</Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color: COLORS.white}}>Email address</Text>

                <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22}}>
                    <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.grey}
                            keyboardType='email-address'
                            style={{
                                width: "100%",
                                color: COLORS.white
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color: COLORS.white
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22}}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.grey}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%",
                                color: COLORS.white}}/>
                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12}}>
                                {isPasswordShown == true ? (<Ionicons name="eye-off" size={24} color={COLORS.primary} />) :
                                 (<Ionicons name="eye" size={24} color={COLORS.white} />)}
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6}}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}/>
                    <Text style={{color: COLORS.white}}>Remember Me</Text>
                </View>

                <Button
                    title="Login"
                    filled
                    style={{
                        width: '100%',
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: COLORS.primary,
                        borderColor: COLORS.primary,}} 
                        onPress={() => router.push('../home')}/>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10}}/>
                    <Text style={{ fontSize: 14 , color: COLORS.white}}>Or Login with</Text>

                    <View style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,}}/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'}}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10}}>
                        <Image
                            source={require("../../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8}}
                            resizeMode='contain'/>
                            <Text style={{color: COLORS.white}}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10}}>
                        <Image
                            source={require("../../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8}} resizeMode='contain'/>
                            <Text style={{color: COLORS.white}}>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22}}>
                    <Text style={{ fontSize: 16, color: COLORS.white }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => router.push('./sign-up')}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary  ,
                            fontWeight: "bold",
                            marginLeft: 6}}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignIn