import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      {/* Texto del logo clickeable */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.logoText}>SENSORIAL</Text>
      </TouchableOpacity>

      {/* Links */}
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.link}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Catalogo")}>
          <Text style={styles.link}>Catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("QuienesSomos")}>
          <Text style={styles.link}>Quiénes Somos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Ofertas")}>
          <Text style={styles.link}>Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contacto")}>
          <Text style={styles.link}>Contacto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    backgroundColor: "#FDF3EB",
    borderBottomWidth: 1,
    borderBottomColor: "#C68666",
    paddingHorizontal: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000", // negro
    marginRight: 15,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
  linksContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
    color: "#C68666",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
});
