import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";
import Vidas from "../vidas";
import Puzzle from "../puzzle";
import puzzle1 from "../../assets/puzzle1.png";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";

const Nivel1 = ({ onOk, cantidadVidas, onFail }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [message, setMessage] = useState("");
  const [visiblePuzzle, setVisiblePuzzle] = useState(false);
  const [visiblePuzzleActual, setVisiblePuzzleActual] = useState(false);
  const [isChecked, setIsChecked] = useState(0);

  const handleCardClick = (option) => {
    setIsChecked(option);
    if (option === 4) {
      setMessage("LO HICISTE MUY BIEN");
      setVisiblePuzzle(true);
      setIsDisabledButton(false);
      setIsOk(true);
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

      <Text style={styles.title}>¿Cuál de estos no es un computador?</Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={isChecked === 1 ? styles.cardSelected : styles.card}
          onPress={() => handleCardClick(1)}
        >
          <Image source={img1} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={isChecked === 2 ? styles.cardSelected : styles.card}
          onPress={() => handleCardClick(2)}
        >
          <Image source={img2} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={isChecked === 3 ? styles.cardSelected : styles.card}
          onPress={() => handleCardClick(3)}
        >
          <Image source={img3} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={isChecked === 4 ? styles.cardCorrect : styles.card}
          onPress={() => handleCardClick(4)}
        >
          <Image source={img4} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{message}</Text>

      {visiblePuzzle && <Puzzle src={puzzle1} onClose={handleClose} />}
      {visiblePuzzleActual && <Puzzle src={puzzle1} onClose={handleClose} />}
      {isOk ? (
        <Button title="CONTINUAR" onPress={onOk} disabled={isDisabledButton} />
      ) : (
        <Button title="VOLVER A INTENTARLO" onPress={resetIntento} />
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
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  card: {
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
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
  cardCorrect: {
    margin: 10,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
});

export default Nivel1;
