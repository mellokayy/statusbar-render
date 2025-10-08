import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import ExamplePage from "./ExamplePage";
import createStackNavigator from './StackNavigator';
import { Provider, Subscribe } from "unstated";
import Example, { ExampleContainer } from "./ExampleContainer";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer } from 'react-navigation';

const App = () => {
  const StackNavigator = createAppContainer(createStackNavigator());

  return (
    <Provider inject={[Example]}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Subscribe to={[ExampleContainer]}>
            {(example: ExampleContainer) => {
              if (example.state.abrir) {
                return (
                  <>
                    <StatusBar backgroundColor="lightpink"/>
                    <ExamplePage />
                  </>
                );
              }

              return (
                <>
                  <StatusBar backgroundColor="lightpink"/>
                  <StackNavigator />
                </>
              );
            }}
          </Subscribe>
        </View>
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }, // ESSENCIAL para que o navigator ocupe a tela inteira
});

export default App;
