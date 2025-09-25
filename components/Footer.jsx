import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Sensorial. Todos los derechos reservados.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDF3EB", // Fondo beige uniforme
    borderTopWidth: 1,
    borderTopColor: "#C68666", // Marrón cálido para borde
  },
  text: {
    fontSize: 14,
    color: "#5C4C43", // Gris oscuro suave
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
});
