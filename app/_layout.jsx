// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { Stack, SplashScreen } from 'expo-router';
// import { useFonts } from 'expo-font';
// import { useEffect } from 'react';
// import { CartProvider } from './cartcontext';

// SplashScreen.preventAutoHideAsync();


// const MainLayout = () =>{

// //
//     const [fontsLoaded, error] = useFonts({
//         "PaytoneOne-Regular": require("../assets/fonts/PaytoneOne-Regular.ttf"),
//         "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
//         "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
//         "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
//         "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
//         "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
//         "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
//         "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
//         "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
//         "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
//       });
      
//       useEffect(() => {
//         if (error) throw error;
      
//         if (fontsLoaded) {
//           SplashScreen.hideAsync();
//         }
//       }, [fontsLoaded, error]);
      
//       if (!fontsLoaded && !error) {
//         return null;
//       }
      
// //
//     return(
//         <Stack>
//             <Stack.Screen name='signup' options={{headerShown:false}}/>
//             <Stack.Screen name='index' options={{headerShown:false}}/>
//             <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
//             <Stack.Screen name='login' options={{headerShown:false}}/>
//             <Stack.Screen name='chatbot' options={{headerShown:false}}/>
//             <Stack.Screen name='feedback' options={{headerShown:false}}/>
//             <Stack.Screen name='selfservice' options={{headerShown:false}}/>
//             <Stack.Screen name='burgerdetail' options={{headerShown:false}}/>





//         </Stack>
//     )

// }

// export default MainLayout


import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { Stack, SplashScreen } from 'expo-router';
import { CartProvider } from './cartcontext'; // Ensure this path is correct

SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "PaytoneOne-Regular": require("../assets/fonts/PaytoneOne-Regular.ttf"),
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <CartProvider>
      <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='chatbot' options={{ headerShown: false }} />
        <Stack.Screen name='feedback' options={{ headerShown: false }} />
        <Stack.Screen name='selfservice' options={{ headerShown: false }} />
        <Stack.Screen name='burgerdetail' options={{ headerShown: false }} />
      </Stack>
    </CartProvider>
  );
}

export default MainLayout;