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
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % imagenes.length;
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ x: nextIndex * width, animated: true });
      }
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, imagenes.length]);

  const handleScroll = (event) => {
    const x = event.nativeEvent.contentOffset?.x ?? 0;
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
          <View key={index} style={styles.imageContainer}>
            <Image
              source={img}
              style={styles.image}
              resizeMode="contain" // Mantiene toda la imagen visible
            />
          </View>
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
  imageContainer: {
    width: width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDF3EB",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  indicatorContainer: { flexDirection: "row", justifyContent: "center", marginTop: 5 },
  indicator: { width: 10, height: 10, borderRadius: 5, marginHorizontal: 3 },
});
