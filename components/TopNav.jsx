import { Text, View, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import TopNavBg from "../assets/topnav-bg.png";

const TopNav = (props) => {
  return (
    <ImageBackground
      source={TopNavBg}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Hi, {props.name}!</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 110, // Adjusted for a reasonable height
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(19, 74, 202, 0.26)", // Optional dark overlay
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: 45,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default TopNav;
