import React, { useRef } from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CatalogoScreen from "./screens/CatalogoScreen";
import QuienesSomosScreen from "./screens/QuienesSomosScreen";
import TiendaScreen from "./screens/TiendaScreen";
import OfertasScreen from "./screens/OfertasScreen";
import ContactoScreen from "./screens/ContactoScreen";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Stack = createStackNavigator();

export default function App() {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={styles.safeArea}>
        {/* Navbar fijo */}
        <Navbar navegar={(screen) => navigationRef.current?.navigate(screen)} />

        {/* Contenedor principal de la navegación */}
        <View style={styles.stackContainer}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Catalogo" component={CatalogoScreen} />
            <Stack.Screen name="QuienesSomos" component={QuienesSomosScreen} />
            <Stack.Screen name="Tienda" component={TiendaScreen} />
            <Stack.Screen name="Ofertas" component={OfertasScreen} />
            <Stack.Screen name="Contacto" component={ContactoScreen} />
          </Stack.Navigator>
        </View>

        {/* Footer fijo */}
        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FDF3EB", // Mantener color de fondo
  },
  stackContainer: {
    flex: 1, // Esto permite que la navegación ocupe todo el espacio
  },
});
