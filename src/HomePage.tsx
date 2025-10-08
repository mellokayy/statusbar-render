import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import ExampleContainer from "./ExampleContainer";

class HomePage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.text}>Home</Text>
          <Pressable
            style={styles.button}
            onPress={() => {ExampleContainer.setarExample(true)}}
          >
            <Text style={styles.buttonText}>ExamplePage</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "lightgreen",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default HomePage;
