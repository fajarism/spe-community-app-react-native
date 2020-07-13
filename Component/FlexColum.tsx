import React from "react"
import { View, StyleSheet } from "react-native"

const FlexColumn = ({containerStyle = {}, children = <View/>}) => {
    return(
        <View style={getContainerStyle(containerStyle).container}>
            {children}
        </View>
    )
}

const getContainerStyle = (containerStyle) => {
    return StyleSheet.create({
        container : {
            display : "flex",
            width : "100%",
            flexDirection : "column",
            ...containerStyle    
        }
    })
}

export default FlexColumn