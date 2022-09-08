import React from 'react'
import Constants from 'expo-constants'
import {Text, View} from 'react-native'
import { CharactersList } from './charactersList'
import {theme} from '../theme.jsx'

const Main = () => {
    return (
    <View style={{marginTop: Constants.statusBarHeight, flex: 1, backgroundColor: theme.colors.bodyPrimary}}>
        <Text>Rate Repository Application</Text>
        <CharactersList/>
    </View>
    )
}


export default Main;