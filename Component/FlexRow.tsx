import React from "react"
import { View, StyleSheet } from "react-native"

const FlexRow = ({containerStyle = {}, children = <View/>}) => {
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
            flex : 1,
            flexDirection : "row",
            ...containerStyle                
        }
    })
}

export default FlexRow