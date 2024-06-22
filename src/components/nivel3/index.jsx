import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Vidas from "../vidas";
import Puzzle from "../puzzle";
import puzzle2 from "../../assets/puzzle2.png";
import puzzle3 from "../../assets/puzzle3.png";

import img6 from "../../assets/imagen 6.png";
import img7 from "../../assets/imagen 7.png";
import img8 from "../../assets/imagen 8.png";
import img9 from "../../assets/imagen 9.png";
import img10 from "../../assets/imagen 10.png";
import img11 from "../../assets/imagen 11.png";

const Nivel3 = ({ onOk, cantidadVidas, onFail }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [message, setMessage] = useState("");
  const [visiblePuzzle, setVisiblePuzzle] = useState(false);
  const [visiblePuzzleActual, setVisiblePuzzleActual] = useState(false);
  const [isChecked, setIsChecked] = useState(-1);

  const handleImageClick = (imageIndex) => {
    setIsChecked(imageIndex);
    if (imageIndex === 5) {
      setMessage("LO HICISTE MUY BIEN");
      setVisiblePuzzle(true);
      setIsDisabledButton(false);
    } else {
      onFail();
      setIsOk(false);
    }
  };

  const resetIntento = () => {
    setIsOk(true);
    console.log("reset");
  };
  const handleClose = () => {
    setVisiblePuzzle(false);
    setVisiblePuzzleActual(false);
  };
  return (
    <View style={styles.container}>
      <Button
        title="Ver puzzle"
        onPress={() => setVisiblePuzzleActual(true)}
        color={"#FFA491"}
      />
      <Vidas cantidadVidas={cantidadVidas} />
      <Text style={styles.title}>
        ¿Cuál de estos no es un lenguaje de programación?
      </Text>
      <View style={styles.imagesContainer}>
        <TouchableOpacity
          onPress={() => handleImageClick(0)}
          style={isChecked === 0 ? styles.cardSelected : styles.card}
        >
          <Image source={img6} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageClick(1)}
          style={isChecked === 1 ? styles.cardSelected : styles.card}
        >
          <Image source={img7} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageClick(2)}
          style={isChecked === 2 ? styles.cardSelected : styles.card}
        >
          <Image source={img8} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageClick(3)}
          style={isChecked === 3 ? styles.cardSelected : styles.card}
        >
          <Image source={img9} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageClick(4)}
          style={isChecked === 4 ? styles.cardSelected : styles.card}
        >
          <Image source={img10} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageClick(5)}
          style={isChecked === 5 ? styles.cardCorrect : styles.card}
        >
          <Image source={img11} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Text style={styles.message}>{message}</Text>
      {visiblePuzzle && <Puzzle src={puzzle3} onClose={handleClose} />}
      {visiblePuzzleActual && <Puzzle src={puzzle2} onClose={handleClose} />}
      {isOk ? (
        <Button title="CONTINUAR" onPress={onOk} disabled={isDisabledButton} />
      ) : (
        <Button
          title="VOLVER A INTENTARLO"
          onPress={resetIntento}
          color="#841584"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardCorrect: {
    margin: 10,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardSelected: {
    margin: 10,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  message: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Nivel3;
