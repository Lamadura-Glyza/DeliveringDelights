
import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../../components/CustomButton';
import { router, Redirect, Link } from 'expo-router'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';


const SignUp = ({}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 10, marginTop: 30}}>
            <StatusBar barStyle="dark-content"/>
                <View style={{marginTop: 20, backgroundColor: COLORS.white}}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color: COLORS.black,
                        alignSelf: 'center'}}>Create Account</Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black,
                        alignSelf: 'center' }}>Connect with your friend today!</Text>
                </View>

                <View style={{ backgroundColor: COLORS.white, top:5, marginBottom: 5 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginVertical: 8}}>Email address</Text>

                <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22}}>
                    <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.secondary}
                            keyboardType='email-address'
                            style={{width: "100%"}}/>
                </View>
            
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginVertical: 8}}>Mobile Number</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22}}>
                        <TextInput
                            placeholder='+63'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: COLORS.grey,
                                height: "100%"}}/>

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.secondary}
                            keyboardType='numeric'
                            style={{ width: "80%"}}/>
                    </View>
               

                    <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginVertical: 8}}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22}}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{width: "100%"}}/>

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12}}>
                            {isPasswordShown == true ? (<Ionicons name="eye-off" size={24} color={COLORS.secondary} />)
                             : (<Ionicons name="eye" size={24} color={COLORS.black} />)}
                        </TouchableOpacity>
                    </View>
                

                

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6}}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.black : undefined}/>
                    <Text>I agree to the terms and conditions</Text>
                </View>
                </View>

                <Button
                    title="Sign Up"
                    filled
                    style={{
                      width: "100%",
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: COLORS.black,
                        borderColor: COLORS.black}}
                    onPress={() => router.push('../home')}/>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10}}/>
                    <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
                <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10}}/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => console.log("Pressed")}
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexDirection: 'row',
                                            height: 52,
                                            borderWidth: 1,
                                            borderColor: COLORS.grey,
                                            marginRight: 4,
                                            borderRadius: 10 }}>
                        <Image source={require("../../assets/facebook.png")}
                                style={{
                                    height: 36,
                                    width: 36,
                                    marginRight: 8}}resizeMode='contain'/>
                            <Text>Facebook</Text>
                        </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log("Pressed")}
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
                                marginRight: 8}}resizeMode='contain'/>

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22}}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                    <Pressable
                        onPress={() => router.push('./sign-in')}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6}}>Login</Text>
                    </Pressable>
                </View>
           
        </SafeAreaView>
    )
}

export default SignUp