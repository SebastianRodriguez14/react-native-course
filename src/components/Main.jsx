import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import { CharactersList } from "./charactersList";
import { theme } from "../theme.jsx";
import { AppBar } from "./appBar";
import { Navigation } from "./navigation";

const Main = () => {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.bodyPrimary }}>
      <AppBar />

      {/* <CharactersList /> */}
      <Navigation/>
    </View>
  );
};

export default Main;
