import React, {useState} from "react"
import {View, Image, StyleSheet, Dimensions, ScrollView} from "react-native"
import {Text} from "react-native-elements"

import selfProfile from "../../Assets/self-profile.jpg"
import color from "../../Variable/Color"

const win = Dimensions.get("window")

const styles = StyleSheet.create({
    mainview : {
      flexDirection:"column",
      flex: 1,
    },
    backgroundImage : {
        height : 200,
        width: win.width + 10,
        backgroundColor: color.profiletabcolor,
        borderBottomEndRadius: 60,
        marginLeft : -5,
        marginRight: -5,
        borderBottomStartRadius: 60,
        position: "absolute",
        top: 0,
        left:0
    },
    imagecontainer : {
        padding: 20,
        paddingTop: 30
    },
    profileimage : {
        height:300,
        width:"100%",
        alignItems:"center",
        borderRadius:10
    },
    name : {
        fontWeight:"bold",
        fontSize : 30,
        marginTop : 12,
        color: color.primarycolor
    },
    shortbio : {
        fontSize : 14,
        color: "grey"
    }
})

const ProfileFragment : () => React$Node = (props) => {
    return(
        <ScrollView style={styles.mainview}>
            <View style={styles.backgroundImage}/>
            <View style={styles.imagecontainer}>
                <Image style={styles.profileimage} source={selfProfile}/>
            <Text style={styles.name}>Alexandria Haney</Text>
            <Text style={styles.shortbio}>Software Developer at Telkom</Text>
            </View>
        </ScrollView>
    )
}

export default ProfileFragment