import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

export default function ProductCard({ producto }) {
  return (
    <View style={styles.card}>
      <Image
        source={
          typeof producto.imagen === "string"
            ? { uri: producto.imagen } // Para imágenes remotas
            : producto.imagen         // Para imágenes locales
        }
        style={styles.image}
        resizeMode="contain" // Mantiene la imagen completa centrada
      />
      <Text style={styles.nombre}>{producto.nombre}</Text>
      <Text style={styles.precio}>{producto.precio}</Text>
      <Text style={styles.descripcion}>{producto.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    margin: 10,
    backgroundColor: "#FDF3EB",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  nombre: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
  precio: {
    fontSize: 14,
    color: "#C68666",
    marginVertical: 2,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
  descripcion: {
    fontSize: 12,
    color: "#5C4C43",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
});
