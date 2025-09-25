import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native";

export default function QuienesSomosScreen() {
  const handlePress = (tipo) => {
    if (Platform.OS === "web") {
      window.alert(`Has tocado la sección: ${tipo}`);
    } else {
      Alert.alert("Información", `Has tocado la sección: ${tipo}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>🌸 Quiénes Somos</Text>
      <Text style={styles.textoCentrado}>
        Somos Aromas de Luz, dedicados a velas artesanales que llenan de armonía tu hogar. Cada vela está cuidadosamente elaborada con ingredientes naturales y aromas seleccionados para transmitir bienestar y relajación.
      </Text>

      <TouchableOpacity style={styles.card} onPress={() => handlePress("Misión")}>
        <Text style={styles.subtitulo}>✨ Misión</Text>
        <Text style={styles.texto}>
          Crear velas que transmitan paz y bienestar, fomentando un ambiente acogedor y armonioso en cada hogar. Buscamos innovar constantemente en fragancias y diseños para brindar experiencias únicas a nuestros clientes.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => handlePress("Visión")}>
        <Text style={styles.subtitulo}>🌱 Visión</Text>
        <Text style={styles.texto}>
          Ser líderes en velas aromáticas artesanales en Latinoamérica, reconocidos por nuestra calidad, creatividad y compromiso con el medio ambiente. Aspiramos a expandir nuestra marca y conectar con personas que valoren la armonía y el bienestar en sus espacios.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    backgroundColor: "#FDF3EB", 
    padding: 15, 
    alignItems: "center",
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: "800", 
    textAlign: "center", 
    marginBottom: 15,
    color: "#C68666",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
  subtitulo: { 
    fontSize: 18, 
    fontWeight: "700", 
    marginBottom: 5,
    color: "#C68666",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
  texto: { 
    fontSize: 14, 
    lineHeight: 20, 
    color: "#5C4C43",
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
  textoCentrado: {
    fontSize: 14,
    lineHeight: 20,
    color: "#5C4C43",
    textAlign: "center",
    marginBottom: 20,
    maxWidth: 350, // ancho adaptable a web y móvil
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
  card: { 
    marginTop: 15, 
    padding: 15, 
    borderRadius: 10, 
    backgroundColor: "#FDF3EB",
    width: "90%",
    maxWidth: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});
