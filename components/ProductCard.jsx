import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

export default function ProductCard({ producto }) {
  return (
    <View style={styles.card}>
      <Image
        source={
          typeof producto.imagen === "string"
            ? { uri: producto.imagen }  // imágenes remotas
            : producto.imagen          // imágenes locales
        }
        style={styles.image}
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
    backgroundColor: "#fff",
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
  },
  precio: {
    fontSize: 14,
    color: "#C68666",
    marginVertical: 2,
  },
  descripcion: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
});
