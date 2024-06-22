import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import logo from "./assets/logo.png";
import play from "./assets/play.png";

const MenuScreen = ({ navigation }) => {
  //   return (
  //     <View style={styles.container}>
  //       <View>
  //         <Text>!Bienvenido/a a BITQUEST!</Text>
  //       </View>
  //
  //     </View>
  //   );
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "white", fontSize: 30 }}>
          !Bienvenido/a a BITQUEST!
        </Text>
      </View>
      <Image source={logo} style={{ width: 250, height: 250 }} alt="logo" />
      <View style={{ display: "flex", alignItems: "center", marginTop: 50 }}>
        <View style={{ width: "80%" }}>
          <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
            Responde preguntas sobre Introducción a la computación
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Pressable onPress={() => navigation.navigate("Game")}>
            <Image source={play} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default MenuScreen;
