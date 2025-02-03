import { Text, View, StyleSheet, ImageBackground } from "react-native";
import React, { Component } from "react";
import BottomNavBg from "../assets/topnav-bg.png";
import HomeIcon from "../assets/homeIcon.svg";
import ProfileIcon from "../assets/profileIcon.svg";

const BottomNav = (props) => {
  return (
    <ImageBackground
      source={BottomNavBg}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>this is the footer.</Text>
      </View>
    </ImageBackground>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 80, // Adjusted for a reasonable height
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(19, 74, 202, 0.26)", // Optional dark overlay
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    paddingTop: 0,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
