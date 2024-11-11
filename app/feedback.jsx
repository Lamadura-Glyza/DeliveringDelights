import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const Feedback = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmitFeedback = () => {
    // Implement your feedback submission logic here (send to backend, show a success message, etc.)
    alert(`Thank you for your feedback! You rated us ${rating} stars.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How satisfied are you with our service?</Text>
      
      <View style={styles.ratingContainer}>
        {/* Replace icons with text or buttons */}
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity
            key={star}
            onPress={() => handleRating(star)}
            style={[
              styles.starButton,
              { backgroundColor: star <= rating ? '#DC143C' : '#DDDDDD' }, // Gold for selected, light grey for unselected
            ]}
          >
            <Text style={styles.starText}>{star}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmitFeedback}>
        <Text style={styles.submitText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  starButton: {
    width: 40,
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  starText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  submitButton: {
    backgroundColor: COLORS.darkred,
    padding: 20,
    borderRadius: 20,
  },
  submitText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Feedback