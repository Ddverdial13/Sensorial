import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();

  return (
    <View style={styles.navbarContainer}>
      <ScrollView 
        horizontal 
        contentContainerStyle={styles.navbar} 
        showsHorizontalScrollIndicator={false}
      >
        {/* Logo clickeable */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.logoText}>SENSORIAL</Text>
        </TouchableOpacity>

        {/* Links */}
        <View style={styles.linksContainer}>
          {["Home", "Catalogo", "QuienesSomos", "Ofertas", "Contacto"].map((screen, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate(screen)}>
              <Text style={styles.link}>
                {screen === "Home" ? "Inicio" : 
                 screen === "QuienesSomos" ? "Quiénes Somos" : 
                 screen === "Catalogo" ? "Catálogo" : 
                 screen === "Ofertas" ? "Ofertas" : "Contacto"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: "#FDF3EB",
    borderBottomWidth: 1,
    borderBottomColor: "#C68666",
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 60,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginRight: 20,
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
  linksContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15, // espacio entre links
  },
  link: {
    fontSize: 16,
    fontWeight: "600",
    color: "#C68666",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif",
  },
});
