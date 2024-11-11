// 

import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';

const SelfService = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Step 1: Check Your Order Status',
      description: 'Make sure your order has been placed successfully. Check your order history.',
      next: 'Proceed to Step 2'
    },
    {
      title: 'Step 2: Verify Payment Method',
      description: 'Ensure your payment method is valid and has sufficient funds.',
      next: 'Proceed to Step 3'
    },
    {
      title: 'Step 3: Check Delivery Address',
      description: 'Confirm that your delivery address is correct and complete.',
      next: 'Submit Issue'
    },
  ];

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // Final step - Submit the issue or feedback
      Alert.alert('Issue Submitted', 'Your feedback has been submitted for further review.');
      // Optionally, you can navigate back or clear the steps
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: COLORS.white }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: COLORS.black }}>
        Self-Service Troubleshooting
      </Text>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.black }}>
          {steps[step].title}
        </Text>
        <Text style={{ fontSize: 16, color: COLORS.black, marginVertical: 10 }}>
          {steps[step].description}
        </Text>
      </View>

      <Pressable
        style={{
          padding: 15,
          backgroundColor: COLORS.darkred,
          borderRadius: 18,
          alignItems: 'center',
        }}
        onPress={handleNextStep}
      >
        <Text style={{ color: COLORS.white, fontSize: 16, fontWeight: 'bold' }}>
          {steps[step].next}
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SelfService;