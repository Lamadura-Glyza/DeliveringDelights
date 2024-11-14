import React from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import COLORS from '../../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Implement your logout logic here
    Alert.alert('Logout', 'You have been logged out successfully.', [
      {
        text: 'OK',
        onPress: () => {
          // Navigate to login or home screen after logout
          router.push('../sign-in'); // Adjust this route as needed
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>  
      <View style={{ alignItems: 'center', margin: 15, elevation: 10, backgroundColor: COLORS.white }}>  
        <Image 
          source={require("../../assets/icons/profile1.png")}
          style={{
            width: 90,
            height: 90,
            resizeMode: 'cover',
            margin: 10
          }} 
        />
        <Text style={{
          fontWeight: '500',
          fontSize: 20,
          color: COLORS.black,
          marginBottom: 5
        }}>
          Mary Lamadura
        </Text>
        <Text style={{ marginBottom: 15 }}>Joined May 20, 2000</Text>
      </View>
      
      {/* Contact Customer Service */}
      <View style={{ borderColor: COLORS.black, margin: 10 }} >
        <Pressable 
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 18, marginLeft: 15, marginBottom: 4, padding: 5 }} 
          onPress={() => router.push('../chatbot')}
        >
          <Image
            source={require("../../assets/icons/chatbot.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 15, marginLeft: 10 }}>Contact Customer Service</Text>             
        </Pressable>
      </View>
      
      {/* Customer Satisfaction */}
      <View style={{ borderColor: COLORS.black, margin: 10 }} >
        <Pressable 
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 18, marginLeft: 15, marginBottom: 4, padding: 5 }} 
          onPress={() => router.push('../feedback')}
        >
          <Image
            source={require("../../assets/icons/star-rating.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 15, marginLeft: 10 }}>Customer Satisfaction</Text>             
        </Pressable>
      </View>

      {/* Logout Button */}
      <View style={{ borderColor: COLORS.black, marginTop: 180, marginLeft: 10 }} >
        <Pressable 
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 18, marginLeft: 15, marginBottom: 4, padding: 5 }} 
          onPress={handleLogout}
        >
          <Image
            source={require("../../assets/icons/logout.png")} // Add an appropriate logout icon here
            style={{ width: 20, height: 20 }}
          />
          <Text style={{ fontSize: 15, marginLeft: 10 }}>Logout</Text>             
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Profile;