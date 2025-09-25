import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
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
  const navigatorRef = useRef(null);

  const navigate = (screenName) => {
    if (navigatorRef.current) {
      navigatorRef.current.navigate(screenName);
    }
  };

  return (
    <NavigationContainer ref={navigatorRef}>
      <View style={styles.container}>
        {/* Navbar fijo */}
        <Navbar navegar={navigate} />

        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Catalogo" component={CatalogoScreen} />
          <Stack.Screen name="QuienesSomos" component={QuienesSomosScreen} />
          <Stack.Screen name="Tienda" component={TiendaScreen} />
          <Stack.Screen name="Ofertas" component={OfertasScreen} />
          <Stack.Screen name="Contacto" component={ContactoScreen} />
        </Stack.Navigator>

        {/* Footer */}
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
