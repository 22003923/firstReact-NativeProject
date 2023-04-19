import React, { useState } from "react";
import {
  Text, // Component to display text elements
  StyleSheet, // Used for styling components
  View, // A container component for better layout and visuals
  TouchableOpacity, // A button-like component that triggers an action when pressed
  StatusBar, // Used for controlling the app's status bar appearance
} from "react-native";

const App = () => {
  // useState hook for managing the background color state
  const [defaultColor, setDefaultColor] = useState("rgb(156, 55, 7)");

  // Function to set the background color to black
  const blackPressed = () => {
    setDefaultColor("rgb(0, 0, 0)");
  };

  // Function to change the background color randomly
  const changeColor = () => {
    let color =
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")";
    setDefaultColor(color);
  };

  // Main component render
  return (
    <>
      <StatusBar backgroundColor={defaultColor} />
      <View style={[styles.container, { backgroundColor: defaultColor }]}>
        <View
          style={[styles.buttonContainer, { backgroundColor: defaultColor }]}
        >
          <TouchableOpacity onPress={changeColor}>
            <Text style={styles.text}>Tap me</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.buttonContainer, { backgroundColor: defaultColor }]}
        >
          <TouchableOpacity onPress={blackPressed}>
            <Text style={[styles.text, { backgroundColor: defaultColor }]}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default App;

// Define the styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupies the full available space
    alignItems: "center", // Aligns children horizontally to the center
    justifyContent: "center", // Aligns children vertically to the center
  },
  text: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#FFFFFF',
    borderRadius: 15,
    fontWeight: 'bold', // Set font weight to bold
    textDecorationLine: 'none', 
  },  
  buttonContainer: {
    margin: 20,
    elevation: 5, // Add elevation to create a shadow effect on Android
    borderRadius:10,
    shadowColor: '#000', // Add shadow color
    shadowOffset: { width: 0, height: 2 }, // Set shadow offset
    shadowOpacity: 0.25, // Set shadow opacity
    shadowRadius: 3.84, // Set shadow radius
  },  
});
