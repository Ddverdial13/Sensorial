import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  "https://i.imgur.com/9Q9ZQZy.jpg",
  "https://i.imgur.com/v6pUg3x.jpg",
  "https://i.imgur.com/ut5kHSb.jpg",
];

export default function MyCarousel() {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width * 0.9}
        height={200}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1200}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
  },
});
