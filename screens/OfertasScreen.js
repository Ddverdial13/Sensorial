import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from "react-native";

export default function OffersScreen() {
  const offers = [
    { id: 1, name: "Pack Relax", desc: "3 velas de lavanda por 2", price: 300 },
    { id: 2, name: "Dúo Aromático", desc: "Vainilla + Canela con 20% OFF", price: 250 },
    { id: 3, name: "Trío Zen", desc: "Lavanda, menta y rosa a precio especial", price: 400 },
    { id: 4, name: "Pack Floral", desc: "3 velas aromáticas de flores", price: 350 },
    { id: 5, name: "Aroma Dulce", desc: "Vainilla + Chocolate en promoción", price: 280 },
    { id: 6, name: "Velas Premium", desc: "2 velas de edición limitada", price: 500 },
    { id: 7, name: "Pack Aromaterapia", desc: "5 velas variadas con descuento", price: 700 },
  ];

  const claimOffer = (offer) => {
    const mensaje = `Oferta reclamada: ${offer.name} - Lps. ${offer.price}`;
    if (Platform.OS === "web") {
      window.alert(mensaje);
    } else {
      Alert.alert("✅ Oferta reclamada", mensaje);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> Ofertas Especiales </Text>
      {offers.map((offer) => (
        <TouchableOpacity
          key={offer.id}
          style={styles.card}
          onPress={() => claimOffer(offer)}
        >
          <Text style={styles.cardTitle}>{offer.name}</Text>
          <Text style={styles.desc}>{offer.desc}</Text>
          <Text style={styles.price}>Lps. {offer.price}</Text>
          <Text style={styles.buttonHint}>Toca para reclamar</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    alignItems: "center", 
    paddingVertical: 20, 
    backgroundColor: "#FDF3EB"
  },
  title: { 
    fontSize: 24, 
    fontWeight: "800", 
    marginBottom: 20, 
    textAlign: "center",
    color: "#C68666",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  card: {
    backgroundColor: "#FDF3EB",
    borderColor: "#C68666",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: { 
    fontWeight: "700", 
    fontSize: 18, 
    marginBottom: 5, 
    textAlign: "center",
    color: "#C68666",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  desc: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    color: "#5C4C43",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  price: { 
    fontWeight: "600", 
    fontSize: 16, 
    marginBottom: 10,
    color: "#5C4C43",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  },
  buttonHint: {
    fontSize: 12,
    color: "#C68666",
    fontWeight: "700",
    fontFamily: Platform.OS === "ios" ? "Helvetica" : "sans-serif"
  }
});
