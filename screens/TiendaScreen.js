import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Button, Alert } from "react-native";
import ProductCard from "../components/ProductCard";

export default function TiendaScreen() {
  const [carrito, setCarrito] = useState([]);

  const productos = [
    { id: 1, nombre: "Vela Rosa", precio: 170, descripcion: "Aroma floral.", imagen: "https://picsum.photos/200/200?random=21" },
    { id: 2, nombre: "Vela Coco", precio: 190, descripcion: "Tropical y refrescante.", imagen: "https://picsum.photos/200/200?random=22" },
    { id: 3, nombre: "Vela Chocolate", precio: 200, descripcion: "Dulce y acogedor.", imagen: "https://picsum.photos/200/200?random=23" },
    { id: 4, nombre: "Vela Menta", precio: 160, descripcion: "Refrescante y energizante.", imagen: "https://picsum.photos/200/200?random=24" },
  ];

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    Alert.alert("Carrito", `${producto.nombre} agregado al carrito`);
  };

  const pagar = () => {
    if (carrito.length === 0) {
      Alert.alert("Carrito vacío", "Agrega productos antes de pagar");
      return;
    }
    const total = carrito.reduce((sum, item) => sum + item.precio, 0);
    Alert.alert("Pago realizado", `Has pagado L.${total}. ¡Gracias por tu compra!`);
    setCarrito([]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>🛍️ Nuestra Tienda</Text>
      <View style={styles.grid}>
        {productos.map(item => (
          <View key={item.id} style={styles.cardContainer}>
            <ProductCard producto={item} />
            <Button title="Agregar al carrito" onPress={() => agregarCarrito(item)} color="#27ae60" />
          </View>
        ))}
      </View>

      <View style={styles.carritoContainer}>
        <Text style={styles.carritoTitulo}>Productos en carrito: {carrito.length}</Text>
        <Button title="Pagar" onPress={pagar} color="#d35400" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingBottom: 20 },
  titulo: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginVertical: 10 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  cardContainer: { width: 150, margin: 10, alignItems: "center" },
  carritoContainer: { marginTop: 20, paddingHorizontal: 20 },
  carritoTitulo: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
