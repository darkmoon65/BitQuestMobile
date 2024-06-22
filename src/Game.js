import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet } from "react-native";
import sound from "./assets/ongame_sound.mp3";
import Nivel1 from "./components/nivel1";
import Nivel2 from "./components/nivel2";
import Nivel3 from "./components/nivel3";
import Nivel4 from "./components/nivel4";

const Game = ({ navigation }) => {
  const [fase, setFase] = useState(3);
  const iconInit = useRef(null);
  const [cantidadVidas, setCantidadVidas] = useState([1, 1, 1, 1]);

  useEffect(() => {
    if (iconInit.current) {
      iconInit.current.addEventListener("click", playSoundFunction);
    }
    return () => {
      if (iconInit.current) {
        iconInit.current.removeEventListener("click", playSoundFunction);
      }
    };
  }, []);

  const quitarVida = () => {
    setCantidadVidas((vidas) => vidas.slice(0, vidas.length - 1));
  };

  useEffect(() => {
    if (cantidadVidas.length === 0) {
      navigation.navigate("Home");
      setCantidadVidas([1, 1, 1, 1]);
    }
  }, [cantidadVidas]);

  return (
    <View style={styles.container}>
      {fase === 3 && (
        <Nivel1
          onOk={() => setFase(4)}
          onFail={quitarVida}
          cantidadVidas={cantidadVidas}
        />
      )}
      {fase === 4 && (
        <Nivel2
          onOk={() => setFase(5)}
          onFail={quitarVida}
          cantidadVidas={cantidadVidas}
        />
      )}
      {fase === 5 && (
        <Nivel3
          onOk={() => setFase(6)}
          onFail={quitarVida}
          cantidadVidas={cantidadVidas}
        />
      )}
      {fase === 6 && (
        <Nivel4
          onOk={() => navigation.navigate("Home")}
          onFail={quitarVida}
          cantidadVidas={cantidadVidas}
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoBig: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  subContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  playButton: {
    width: 100,
    height: 100,
  },
});

export default Game;
