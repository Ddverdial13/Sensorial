import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function Carousel() {
  const imagenes = [
    require("../assets/logo_sensorial.png"),  
    require("../assets/fondo.jpg"),  
    require("../assets/vela11.jpg"),  
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (activeIndex + 1) % imagenes.length;
      scrollRef.current.scrollTo({ x: nextIndex * width, animated: true });
      setActiveIndex(nextIndex);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scroll}
      >
        {imagenes.map((img, index) => (
          <Image
            key={index}
            source={typeof img === "string" ? { uri: img } : img}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {imagenes.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { backgroundColor: index === activeIndex ? "#C68666" : "#F5D7C0" },
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  scroll: { borderRadius: 10, overflow: "hidden", backgroundColor: "#FDF3EB" },
  image: {
    width: width,
    height: 200,
    resizeMode: "contain", // Ajusta la imagen completa sin recortarla
    backgroundColor: "#FDF3EB",
  },
  indicatorContainer: { flexDirection: "row", justifyContent: "center", marginTop: 5 },
  indicator: { width: 10, height: 10, borderRadius: 5, marginHorizontal: 3 },
});
