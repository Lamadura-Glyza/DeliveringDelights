import React, { useState, useEffect } from 'react';
import { View, Text, TextInput,Image,  FlatList, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import COLORS from '../constants/colors';
import { router } from 'expo-router';


const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! This is Jessica. How can I assist you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { id: Date.now(), text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput('');

      // Simulate bot response with a delay
      setIsTyping(true);
      setTimeout(() => {
        const botMessage = { id: Date.now(), text: 'Please wait while I process your request...', sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        setIsTyping(false);
      }, 2000); // 2-second delay
    }
  };

  return (
    <SafeAreaView style={{flex: 1,
        padding: 10,
        marginTop: 2,
        backgroundColor: '#E5E4E2',}}>
            <View style={{alignItems: 'flex-end'}}>
                <Pressable style={{alignItems: 'flex-end',}}
                onPress={() => router.push('../selfservice')}
                >
            <Image source={require("../assets/icons/self-service.png")}
                   style={{width: 50,height: 50, 
                                    }}></Image>
                </Pressable>

            </View>
            
            
            
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
            <Text style={{fontSize: 15, color: COLORS.black}}>{item.text}</Text>
          </View>
        )}
        style={{flex: 1,
            marginBottom: 10,}}/>

      {isTyping && <Text style={{  fontStyle: 'italic',
    color: COLORS.grey,
    marginBottom: 5,}}>Bot is typing...</Text>}

      <TextInput
        style={{borderColor: COLORS.darkred,
            borderWidth: 1,
            borderRadius: 20,
            padding: 10,
            marginVertical: 10,
            width: '100%',}}
        value={input}
        onChangeText={setInput}
        placeholder="Type a message..."
      />
      <Button
                    title="Send"
                    filled
                    style={{
                        width: '100%',
                        height: '7%',
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor: COLORS.darkred,
                        }} 
                        onPress={sendMessage}/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,

  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },

});

export default ChatBot;