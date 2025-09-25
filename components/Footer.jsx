import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2025 Sensorial. Todos los derechos reservados.</Text>
      <Text style={styles.text}>Contacto: info@sensorial.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#C68666",
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FDF3EB",
    fontSize: 14,
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
});
