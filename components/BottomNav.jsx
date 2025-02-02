import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export class BottomNav extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text>!!!!! bottomnav</Text>
        </View>
      </>
    );
  }
}

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
  },
  text: {},
});
