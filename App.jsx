import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TopNav from "./components/TopNav.jsx";
import BottomNav from "./components/BottomNav.jsx";
import react, { useState } from "react";

export default function App() {
  const [loggedIn, changeLoginStatus] = useState(false);

  return (
    <>
      <TopNav name="User" />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <BottomNav login={loggedIn} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
