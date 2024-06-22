import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingScreen from "./src/LoadingScreen";
import MenuScreen from "./src/MenuScreen";
import Game from "./src/Game";
const Stack = createNativeStackNavigator();
export default function App() {
  const onPress = () => {};
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Carga"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Carga" component={LoadingScreen} />
        <Stack.Screen name="Home" component={MenuScreen} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
