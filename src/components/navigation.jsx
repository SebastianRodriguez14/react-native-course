import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { CharactersList } from "./charactersList";
import { EpisodesList } from "./episodesList";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="characters">
      <Tab.Screen
        name="characters"
        component={CharactersList}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="episodes"
        component={EpisodesList}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};
