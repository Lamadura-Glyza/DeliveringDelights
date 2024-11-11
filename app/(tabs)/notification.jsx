import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const notifications = [
  { id: '1', message: 'Your order has been delivered!' },
  { id: '2', message: '20% off on your next order!' },
  { id: '3', message: 'Your payment was successful.' },
  { id: '4', message: 'Don’t forget to rate your last order.' },
  { id: '5', message: 'New Drinks added: Coke Float!' },
  { id: '6', message: 'Pending: Requested Refund' },

];

const Notifications = () => {
  return (
    <SafeAreaView style={{flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',}}>
      <Text style={{fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,}}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{    padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            backgroundColor: '#fff',
            marginVertical: 5,
            borderRadius: 5,}}>
            <Text style={{fontSize: 16,}}>{item.message}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Notifications;