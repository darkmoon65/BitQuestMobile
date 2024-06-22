import { View, Image, StyleSheet, Text } from "react-native";
import logo from "./assets/logo.png";
import { useEffect } from "react";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: "90%", height: "43%" }} alt="logo" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
export default LoadingScreen;
