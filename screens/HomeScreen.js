import React, { useState } from "react";
import { 
  ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert, Modal, Image, Platform 
} from "react-native";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  const [lastPress, setLastPress] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productos = [
    { id: 1, nombre: "Vela de flor", precio: "L.350", descripcion: "Vela aromática de 8 onzas - tamaño XL dura más de 50 horas", imagen: require("../assets/vela1.jpg") },
    { id: 2, nombre: "Vela de Virgen", precio: "L.300", descripcion: "Nuestra vela de virgen simboliza unión, paz y amor", imagen: require("../assets/vela8.png") },
    { id: 3, nombre: "Dog Candle", precio: "L350", descripcion: "Nuestra vela en forma de perrito es pequeña en tamaño, pero grande en estilo.", imagen: require("../assets/vela3.jpg") },
  ];

  const showAlert = (titulo, mensaje) => {
    if (Platform.OS === "web") {
      window.alert(`${titulo}\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const handlePress = (producto) => showAlert("Producto seleccionado", `Has tocado: ${producto.nombre}`);
  const handleLongPress = (producto) => showAlert("Long Press", `Has mantenido presionado: ${producto.nombre}`);
  const handleDoublePress = (producto) => {
    const time = new Date().getTime();
    const delta = time - lastPress;
    if (delta < 300) showAlert("Double Press", `Has hecho doble toque en: ${producto.nombre}`);
    setLastPress(time);
  };
  const handleScroll = (event) => console.log("Scroll Y:", event.nativeEvent.contentOffset.y);
  const handleAddToCart = (producto) => showAlert("Carrito", `${producto.nombre} agregado al carrito!`);
  const handleOpenModal = (producto) => { setSelectedProduct(producto); setModalVisible(true); };
  const handleCloseModal = () => setModalVisible(false);

  return (
    <ScrollView style={styles.container} onScroll={handleScroll} scrollEventThrottle={16}>
      <Carousel />
      <Text style={styles.titulo}> Bienvenido a Sensorial </Text>
      <Text style={styles.subtitulo}>Despierta tus sentidos y transforma tu entorno en un oasis de bienestar.
Tu experiencia sensorial comienza aquí </Text>
      <Text style={styles.catalogoTitulo}>Nuestra nueva colección</Text>

      <View style={styles.catalogo}>
        {productos.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => { handlePress(item); handleDoublePress(item); }}
            onLongPress={() => handleLongPress(item)}
            style={styles.cardContainer}
          >
            <ProductCard producto={item} />
            <TouchableOpacity 
              style={styles.cartButton} 
              onPress={() => handleAddToCart(item)}
            >
              <Text style={{color: "#fff", textAlign:"center"}}>🛒 Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.detailButton} 
              onPress={() => handleOpenModal(item)}
            >
              <Text style={{color: "#fff", textAlign:"center"}}>🔍 Detalle</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>

      {selectedProduct && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={handleCloseModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Image
                source={
                  typeof selectedProduct.imagen === "string"
                  ? { uri: selectedProduct.imagen }
                  : selectedProduct.imagen
                }
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>{selectedProduct.nombre}</Text>
              <Text style={styles.modalDesc}>{selectedProduct.descripcion}</Text>
              <Text style={styles.modalPrice}>{selectedProduct.precio}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                <Text style={{color:"#fff"}}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FDF3EB" },
  titulo: { fontSize: 22, fontWeight: "800", textAlign: "center", marginVertical: 10, color: "#C68666", fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif" },
  subtitulo: { fontSize: 16, textAlign: "center", color: "#5C4C43", marginBottom: 20, fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif", fontWeight: "400" },
  catalogoTitulo: { fontSize: 20, fontWeight: "600", textAlign: "center", marginVertical: 10, color: "#C68666", fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif" },
  catalogo: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingBottom: 20 },
  cardContainer: { width: 150, margin: 10, alignItems: "center", backgroundColor: "#FDF3EB", borderRadius: 10, padding: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cartButton: { marginTop: 5, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: "#C68666", borderRadius: 5, marginBottom: 5, alignItems: "center" },
  detailButton: { marginTop: 0, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: "#5C4C43", borderRadius: 5, marginBottom: 5, alignItems: "center" },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" },
  modalContent: { width: 300, backgroundColor: "#FDF3EB", borderRadius: 10, padding: 20, alignItems: "center" },
  modalImage: { width: 200, height: 200, borderRadius: 10, marginBottom: 10 },
  modalTitle: { fontSize: 18, fontWeight: "700", marginBottom: 5, color: "#C68666", fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif" },
  modalDesc: { fontSize: 14, color: "#5C4C43", textAlign: "center", marginBottom: 5, fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif" },
  modalPrice: { fontWeight: "600", fontSize: 16, marginBottom: 10, fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif" },
  closeButton: { backgroundColor: "#C68666", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 5, alignItems: "center" },
});
