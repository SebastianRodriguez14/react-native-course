import React from 'react'
import { StyleSheet, View } from 'react-native'
import {theme} from '../theme.jsx'
import { StyledText } from './styledText'
import Constants from 'expo-constants'

export const AppBar = () => {
    
    
    return (
        <View style={styles.app_bar}>
            <StyledText primary bold title>Rick and Morty</StyledText>
        </View>    
    )
}


const styles = StyleSheet.create({
    app_bar: {
        backgroundColor: theme.colors.bodySecondary,
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        paddingLeft: 10
        
    }
})