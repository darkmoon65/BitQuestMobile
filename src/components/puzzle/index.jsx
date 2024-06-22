import React from "react";
import { Modal, Image, StyleSheet, TouchableOpacity, View } from "react-native";

const Puzzle = ({ src, visible, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalBackground}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={handleClose}
        >
          <Image source={src} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default Puzzle;
