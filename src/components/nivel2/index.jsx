import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import Vidas from "../vidas";
import Puzzle from "../puzzle";
import puzzle1 from "../../assets/puzzle1.png";
import puzzle2 from "../../assets/puzzle2.png";

const Nivel2 = ({ onOk, cantidadVidas, onFail }) => {
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isOk, setIsOk] = useState(true);
  const [message, setMessage] = useState("");
  const [visiblePuzzle, setVisiblePuzzle] = useState(false);
  const [visiblePuzzleActual, setVisiblePuzzleActual] = useState(false);
  const [isChecked, setIsChecked] = useState(-1); 

  const algorithmOptions = [
    "c, e, d, g, f, h, a, b, i",
    "c, f, e, d, b, h, a, g, i",
    "a, b, c, d, e, f, g, h, i",
    "c, f, e, d, a, b, h, g, i",
  ];

  const handleCardClick = (index) => {
    setIsChecked(index); // Marcar la opción seleccionada

    if (index === 2) {
      // Comparar con el índice correcto
      setMessage("LO HICISTE MUY BIEN");
      setVisiblePuzzle(true);
      setIsDisabledButton(false);
    } else {
      onFail();
      setIsOk(false);
    }
  };

  const renderAlgoritmo = () => {
    return algorithmOptions.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.card,
          isChecked === index && { backgroundColor: "green" }, // Estilo activo si está seleccionado
        ]}
        onPress={() => handleCardClick(index)}
      >
        <Text style={styles.cardText}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  const resetIntento = () => {
    setIsOk(true);
    setIsChecked(-1); // Resetear la opción seleccionada
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
      <Text style={styles.title}>El orden correcto del algoritmo es:</Text>
      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <Text>a. Salir de casa</Text>
          <Text>b. Dirigirme a la escuela</Text>
          <Text>c. Levantarme</Text>
          <Text>d. Vestirme</Text>
          <Text>e. Asearme</Text>
        </View>
        <View style={styles.gridItem}>
          <Text>f. Desayunar</Text>
          <Text>g. Ponerme los zapatos</Text>
          <Text>h. Tomar los útiles</Text>
          <Text>i. Llegar a la escuela</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>{renderAlgoritmo()}</View>
      <Text style={styles.message}>{message}</Text>
      {visiblePuzzle && <Puzzle src={puzzle2} onClose={handleClose} />}
      {visiblePuzzleActual && <Puzzle src={puzzle1} onClose={handleClose} />}
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
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  gridItem: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#87CEEB",
    borderRadius: 10,
  },
  cardText: {
    color: "black",
  },
  message: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Nivel2;
