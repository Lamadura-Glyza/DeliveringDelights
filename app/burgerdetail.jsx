
import React from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import { useRouter } from 'expo-router';
import { useCart } from './cartcontext'; // Make sure to import the useCart hook

const BurgerDetail = () => {
  const router = useRouter();
  const { addToCart } = useCart(); // Access the addToCart function from the context

  const handleAddToCart = () => {
    const burgerItem = {
      name: "Cheese Burger",
      price: 126, // Set the price of the cheeseburger
    };

    addToCart(burgerItem); // Add the item to the cart
    Alert.alert('Added to Cart', 'Cheese Burger has been added to your cart.');
    console.log("Burger added to cart:", burgerItem); // Log for debugging
    router.push('../cart'); // Navigate to cart screen after adding
  };

  const handleOrder = () => {
    Alert.alert('Order Confirmed', 'Your Cheese Burger order has been placed successfully!', [
      { text: 'OK', onPress: () => {
          console.log("Order placed"); // Log for debugging
          router.push('../cart'); // Navigate to cart if needed
        } 
      }
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: COLORS.white }}>
      <Image
        source={require("../assets/images/burger.jpeg")} // Ensure this path is correct
        style={{ width: '100%', height: 250, borderRadius: 15 }}
      />
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginVertical: 10, color: COLORS.black }}>
        Cheese Burger
      </Text>
      <Text style={{ fontSize: 18, marginBottom: 10, color: COLORS.black }}>
        Price: ₱126
      </Text>
      <Text style={{ fontSize: 16, color: COLORS.black, marginBottom: 20 }}>
        A delicious cheese burger with a juicy patty, fresh lettuce, tomato, and a slice of cheddar cheese. Perfect for any meal!
      </Text>

      <View style={{marginTop: 50,}}>
      <Pressable
        style={{
          padding: 15,
          backgroundColor: COLORS.black,
          borderRadius: 8,
          alignItems: 'center',
          marginBottom: 10,
        }}
        onPress={handleAddToCart}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>
          Add to Cart
        </Text>
      </Pressable>

      <Pressable
        style={{
          padding: 15,
          backgroundColor: COLORS.darkred, // A different color for order button
          borderRadius: 8,
          alignItems: 'center',
        }}
        onPress={handleOrder}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>
          Order Now
        </Text>
      </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default BurgerDetail;