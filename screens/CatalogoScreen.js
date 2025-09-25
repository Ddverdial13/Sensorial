import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Modal, Button, Image, Platform } from "react-native";
import ProductCard from "../components/ProductCard";

export default function CatalogoScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);


  
  const productos = [
    { id: 1, nombre: "Vela de flor", precio: "L.350", descripcion: "Regala bienestar en este Día de la Mujer Hondureña! Vela aromática de 8 onzas - tamaño XL dura más de 50 horas", imagen: require("../assets/vela1.jpg") },
    { id: 2, nombre: "Tin dorada", precio: "L.220", descripcion: "Pide nuestra vela de 3 oz en su elegante latita dorada. Pudes personalizarla en dorado y elegir tu aroma", imagen: require("../assets/vela2.jpg") },
    { id: 3, nombre: "Dog Candle", precio: "L.330", descripcion: "Nuestra vela en forma de perrito es pequeña en tamaño, pero grande en estilo. ", imagen: require("../assets/vela3.jpg") },
    { id: 4, nombre: "Mini Bubble", precio: "L.180", descripcion: "Ya disponible nuestra mini vela bubble! es el detalle perfecto para tus eventos especiales. Personalízala con tu aroma y color favorito", imagen: require("../assets/vela4.jpg") },
    { id: 5, nombre: "Velas para eventos", precio: "L.150", descripcion: "Velas para bautizos, baby showers y bodas. Regala detalles con intención & hechos con amor", imagen: require("../assets/vela5.jpg") },
    { id: 6, nombre: "Vela de osito", precio: "L.150", descripcion: "Nuestras velas de cera de soya no solo iluminan, sino que también cuidan de ti y del planeta", imagen: require("../assets/vela6.jpg") },
    { id: 7, nombre: "Tin negra", precio: "L.220", descripcion: "Pide nuestra vela de 3 oz en su elegante latita negra. Pudes personalizarla en dorado y elegir tu aroma", imagen: require("../assets/vela7.png") },
    { id: 8, nombre: "Vela de Virgen", precio: "L.300", descripcion: "Nuestra vela de virgen simboliza unión, paz y amor", imagen: require("../assets/vela8.png") },
    { id: 9, nombre: "Vela de la Sagrada Familia", precio: "L.380", descripcion: "Enciende en tu hogar la armonía y bendición de la Sagrada Familia", imagen: require("../assets/vela9.png") },
    { id: 10, nombre: "Vela en forma de pino", precio: "L.150", descripcion: "Esta navidad sorprende a tus seres queridos con una vela en forma de árbol de navidad", imagen: require("../assets/vela10.jpg") },
  ];

  const handlePress = (producto) => {
    setProductoSeleccionado(producto);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Catálogo de Velas</Text>
      <View style={styles.grid}>
        {productos.map(item => (
          <TouchableOpacity key={item.id} onPress={() => handlePress(item)} style={styles.cardContainer}>
            <ProductCard producto={item} />
          </TouchableOpacity>
        ))}
      </View>

      {productoSeleccionado && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={productoSeleccionado.imagen} // <-- Usar directamente
                style={styles.modalImagen}
                resizeMode="contain"
              />
              <Text style={styles.modalTitulo}>{productoSeleccionado.nombre}</Text>
              <Text style={styles.modalPrecio}>{productoSeleccionado.precio}</Text>
              <Text style={styles.modalDescripcion}>{productoSeleccionado.descripcion}</Text>
              <Button title="Cerrar" onPress={() => setModalVisible(false)} color="#C68666" />
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    padding: 10, 
    alignItems: "center", 
    backgroundColor: "#FDF3EB" 
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: "700", 
    marginVertical: 10, 
    color: "#C68666", 
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  grid: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "center",
    maxWidth: 5 * 150 + 40  
  },
  cardContainer: { 
    width: 150,      
    margin: 10,      
    alignItems: "center" 
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#FDF3EB",
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImagen: {
    width: 200,
    height: 200,
    marginBottom: 15,
    borderRadius: 10
  },
  modalTitulo: { 
    fontSize: 20, 
    fontWeight: "700", 
    marginBottom: 10, 
    color: "#C68666",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  modalPrecio: { 
    fontSize: 18, 
    marginBottom: 10, 
    color: "#5C4C43",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  modalDescripcion: { 
    fontSize: 16, 
    marginBottom: 20, 
    textAlign: "center",
    color: "#5C4C43",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
});
