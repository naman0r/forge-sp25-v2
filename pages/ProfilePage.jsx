import { Text, View, StyleSheet } from "react-native";
import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import TopNav from "../components/TopNav.jsx";
import BottomNav from "../components/BottomNav.jsx";

const ProfilePage = (props) => {
  return (
    <>
      <TopNav />
      <View>
        <Text>this is the profile page</Text>
      </View>
      <BottomNav />
    </>
  );
};

export default ProfilePage;
