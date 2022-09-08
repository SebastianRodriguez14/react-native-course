import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";
import { StyledText } from "./styledText";

export const CharacterItem = ({ character }) => {
  return (
    <View style={styles.container_character_item}>
      <Image source={{ uri: character.image }} style={styles.character_image} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: "center" }}>
          <StyledText title primary bold>{character.name}</StyledText>
        </View>
        <View style={styles.container_character_description}>
          <View style={styles.container_character_item_desc}>
            <StyledText semibold >Status</StyledText>
            <StyledText >{character.status}</StyledText>
          </View>
          <View style={styles.container_character_item_desc}>
            <StyledText semibold>Species</StyledText>
            <StyledText >{character.species}</StyledText>
          </View>
          <View style={styles.container_character_item_desc}>
            <StyledText semibold>Gender</StyledText>
            <StyledText >{character.gender}</StyledText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container_character_item: {
    height: 110,
    borderRadius: 5,
    backgroundColor: theme.colors.bodySecondary,
    flexDirection: "row",
    padding: 5,
  },
  character_image: {
    height: 90,
    width: 90,
    alignSelf: "center",
  },
  container_character_description: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  container_character_item_desc: {
    flexDirection: "column",
    flex: 1,
    marginVertical: 2,
    alignItems: 'center'
  },
});
