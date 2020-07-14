import React from 'react'
import FlexRow from './FlexRow'
import { Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const UserLikesItem  = ({ name = "", image = null }) => {
    return(
        <TouchableOpacity onPress={() => Actions.profile({})}>
            <FlexRow containerStyle={styles.container}>
                <Image source={image} style={styles.image}/>
                <Text style={styles.name}>{name}</Text>
            </FlexRow>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 16
    },

    image : {
        width : 48,
        height : 48,
        borderRadius : 24
    },

    name : {
        fontSize : 20,
        marginLeft : 16,
        alignSelf : "center"
    }
})

export default UserLikesItem