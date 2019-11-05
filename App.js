import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [buttonText, setButtonText] = useState(
    "Open up App.js to start working on your app!"
  );

  const handleClick = () => {
    setButtonText("Modified Text..");
  };

  return (
    <View style={styles.container}>
      <Text> {buttonText} </Text>
      <Button title="Press me" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
