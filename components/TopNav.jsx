import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

const TopNav = (props) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Hi, {props.name}!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "orange",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    paddingTop: 20,
    textAlign: "center",
  },
});

export default TopNav;
