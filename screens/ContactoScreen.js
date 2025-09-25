import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform } from "react-native";

export default function ContactoScreen() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviarFormulario = () => {
    const mensajeAlerta = "Tu mensaje ha sido enviado correctamente.";

    if (Platform.OS === "web") {
      window.alert(`✅ Mensaje enviado: ${mensajeAlerta}`);
    } else {
      Alert.alert("✅ Mensaje enviado", mensajeAlerta);
    }

    setNombre(""); 
    setEmail(""); 
    setMensaje("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}> Contáctanos</Text>

      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        value={nombre}
        onChangeText={setNombre}
        placeholderTextColor="#5C4C43"
      />

      <TextInput
        style={styles.input}
        placeholder="Tu correo"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#5C4C43"
      />

      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Escribe tu mensaje"
        multiline
        value={mensaje}
        onChangeText={setMensaje}
        placeholderTextColor="#5C4C43"
      />

      <TouchableOpacity style={styles.button} onPress={enviarFormulario}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    backgroundColor: "#FDF3EB", 
    padding: 20, 
    alignItems: "center",
  },
  titulo: { 
    fontSize: 22, 
    fontWeight: "800", 
    textAlign: "center", 
    marginBottom: 20,
    color: "#C68666",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  input: { 
    width: 300, 
    borderWidth: 1, 
    borderColor: "#C68666", 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 15, 
    fontSize: 14, 
    backgroundColor: "#fff",
    color: "#5C4C43",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  button: {
    backgroundColor: "#C68666",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  }
});
