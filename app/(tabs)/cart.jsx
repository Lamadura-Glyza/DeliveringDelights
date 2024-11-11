
// import React from 'react';
// import { View, Text, Pressable, Alert, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
//  import { useCart } from '../cartcontext'; // Ensure this is your cart context hook
// import COLORS from '../../constants/colors';

// const Cart = () => {
//   const { cartItems, clearCart, totalPrice } = useCart();

//   const handleClearCart = () => {
//     Alert.alert(
//       "Clear Cart",
//       "Are you sure you want to clear your cart?",
//       [
//         { text: "Cancel", style: "cancel" },
//         { text: "OK", onPress: clearCart } // This should clear the cart
//       ]
//     );
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: COLORS.white }}>
//       <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Your Cart</Text>

//       {cartItems.length === 0 ? (
//         <View className='items-center my-60 justify-center font-payToneReg' >
//                <Image source={require("../../assets/icons/empty.png")}
//                       style={{
//                                 width: 200,
//                                 height: 200,
//                                 opacity: 100
//                       }}></Image>
//                             <Text style={{ fontSize: 25,
//                                            fontWeight: 'bold',
//                                            padding: 10
//                             }}>Empty Cart</Text>
        
//             </View>      ) : (
//         <View>
//           {cartItems.map((item, index) => (
//             <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
//               <Text style={{ fontSize: 16 }}>{item.name}</Text>
//               <Text style={{ fontSize: 16 }}>₱{item.price}</Text>
//             </View>
//           ))}
//           <View style={{ borderTopWidth: 1, borderColor: COLORS.lightgrey, marginTop: 20, paddingTop: 10 }}>
//             <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total: ₱{totalPrice}</Text>
//           </View>
//         </View>
//       )}

//       <Pressable
//         style={{
//           padding: 15,
//           backgroundColor: COLORS.darkred,
//           borderRadius: 8,
//           alignItems: 'center',
//           marginTop: 20,
//         }}
//         onPress={handleClearCart}
//       >
//         <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>
//           Clear Cart
//         </Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default Cart;


import React from 'react';
import { View, Text, Pressable, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCart } from '../cartcontext'; // Ensure this is your cart context hook
import COLORS from '../../constants/colors';

const Cart = () => {
  const { cartItems, clearCart, totalPrice } = useCart();

  const handleClearCart = () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to clear your cart?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: clearCart } // This should clear the cart
      ]
    );
  };

  const handleOrder = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart is Empty', 'Please add items to your cart before ordering.');
      return;
    }

    // Logic to handle order confirmation
    Alert.alert('Order Confirmed', 'Your order has been placed successfully!', [
      { text: 'OK', onPress: () => {
          clearCart(); // Clear the cart after ordering
          // Optionally navigate back to another screen
        }
      }
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: COLORS.white }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Your Cart</Text>

      {cartItems.length === 0 ? (
        <View className='items-center my-60 justify-center font-payToneReg'>
          <Image 
            source={require("../../assets/icons/empty.png")}
            style={{
              width: 200,
              height: 200,
              opacity: 100
            }}
          />
          <Text style={{ fontSize: 25, fontWeight: 'bold', padding: 10 }}>Empty Cart</Text>
        </View>
      ) : (
        <View>
          {cartItems.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Text style={{ fontSize: 16 }}>₱{item.price}</Text>
            </View>
          ))}
          <View style={{ borderTopWidth: 1, borderColor: COLORS.lightgrey, marginTop: 20, paddingTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total: ₱{totalPrice}</Text>
          </View>
        </View>
      )}

      <Pressable
        style={{
          padding: 15,
          backgroundColor: COLORS.black,
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 20,
        }}
        onPress={handleClearCart}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>
          Clear Cart
        </Text>
      </Pressable>

      <Pressable
        style={{
          padding: 15,
          backgroundColor: COLORS.darkred, // Adjust the color as needed
          borderRadius: 8,
          alignItems: 'center',
          marginTop: 10,
        }}
        onPress={handleOrder}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>
          Order Now
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Cart;