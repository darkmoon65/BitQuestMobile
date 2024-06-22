import React from "react";
import { View, Image, StyleSheet } from "react-native";
import heart from "../../assets/heart.png";

const Vidas = ({ cantidadVidas }) => {
  return (
    <View style={styles.container}>
      {cantidadVidas?.map((_, index) => (
        <Image key={index} source={heart} style={styles.heartImage} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  heartImage: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: "contain", // Ajusta la forma en que la imagen se redimensiona
  },
});

export default Vidas;
