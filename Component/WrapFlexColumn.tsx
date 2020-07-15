import React from "react"
import { View, StyleSheet } from "react-native"

const WrapFlexColumn = ({containerStyle = {}, children = <View/>}) => {
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
            flexDirection : "column",
            ...containerStyle                
        }
    })
}

export default WrapFlexColumn