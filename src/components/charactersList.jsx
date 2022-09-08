import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import dataCharacters from "../data/characters.json";
import { CharacterItem } from "./characterItem";

export const CharactersList = () => {
  // console.log(dataCharacters);
  return (
    <FlatList
      data={dataCharacters}
      ItemSeparatorComponent={() => {
        return <Text></Text>
      } }
      renderItem={({ item: character }) => (
        <CharacterItem character={character}/>
      )}
      style={styles.container_characters_list}
    />
  );
};

const styles = StyleSheet.create({
  container_characters_list: {
    paddingHorizontal: 10
  },
});
