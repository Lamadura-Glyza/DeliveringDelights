import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import COLORS from "../constants/colors";
import { icons } from "../constants";

const FormField = (props) => {
  const { title, value, placeholder, handleChangeText, style, ...otherProps } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...otherProps}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    color: COLORS.gray100,
    marginBottom: 8,
    fontFamily: "PMedium",
  },
  inputContainer: {
    width: "100%",
    height: 60,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white500,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: COLORS.gray300,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "U_Regular",
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default FormField;
