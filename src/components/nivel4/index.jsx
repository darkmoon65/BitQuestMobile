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
import puzzle3 from "../../assets/puzzle3.png";
import puzzle4 from "../../assets/puzzle4.png";

import img12 from "../../assets/image12.jpg";
import img13 from "../../assets/image13.jpg";
import img14 from "../../assets/image14.jpg";
import img15 from "../../assets/image15.jpg";

const Nivel4 = ({ onOk, cantidadVidas, onFail }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [message, setMessage] = useState("");
  const [visiblePuzzle, setVisiblePuzzle] = useState(false);
  const [visiblePuzzleActual, setVisiblePuzzleActual] = useState(false);
  const [isChecked, setIsChecked] = useState(-1);

  const handleImageClick = (imageIndex) => {
    setIsChecked(imageIndex);
    if (imageIndex === 0) {
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
        ¿A quién se le considera el padre de la IA?
      </Text>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => handleImageClick(0)}
          style={isChecked === 0 ? styles.cardCorrect : styles.card}
        >
          <Image source={img12} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageClick(1)}
          style={isChecked === 1 ? styles.cardSelected : styles.card}
        >
          <Image source={img13} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageClick(2)}
          style={isChecked === 2 ? styles.cardSelected : styles.card}
        >
          <Image source={img14} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleImageClick(3)}
          style={isChecked === 3 ? styles.cardSelected : styles.card}
        >
          <Image source={img15} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Text style={styles.message}>{message}</Text>
      {visiblePuzzle && <Puzzle src={puzzle4} onClose={handleClose} />}
      {visiblePuzzleActual && <Puzzle src={puzzle3} onClose={handleClose} />}
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
  message: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Nivel4;
