import React from 'react'
import { StyleSheet, Text } from 'react-native'
import {theme} from '../theme.jsx'

const styles = StyleSheet.create({
    defaultStyleText : {
        color: theme.colors.textSecondary,
        fontSize: theme.fontSizes.paragraph,
        fontWeight: theme.fontWeights.normal, 
        fontFamily: theme.fontFamily.subTitle
    },
    semibold: {fontWeight: theme.fontWeights.semibold},
    bold: {fontWeight: theme.fontWeights.bold},
    primary: {color: theme.colors.textPrimary},
    highlighted: {color: theme.colors.highlighted},
    title: {fontSize: theme.fontSizes.title, fontFamily: theme.fontFamily.title},
    subTitle: {fontSize: theme.fontSizes.subTitle},
})

export const StyledText = ({children, semibold, bold, primary, highlighted, title, subTitle, ...otherProps}) => {
    console.log(otherProps);
    const textStyles = [
        styles.defaultStyleText,
        bold && styles.bold,
        semibold && styles.semibold,
        primary && styles.primary,
        highlighted && styles.highlighted,
        title && styles.title,
        subTitle && styles.subTitle,
        otherProps,
    ]

    return <Text style={textStyles}>
        {children}
    </Text>
}