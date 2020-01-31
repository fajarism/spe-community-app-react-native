import React from "react"
import {Image, StyleSheet, Dimensions} from "react-native"
import Onboarding from "react-native-onboarding-swiper"

import welcomeImage from "../Assets/welcome.png"
import meetFriends from "../Assets/meet-friends.png"
import keepUpdated from "../Assets/keep-updated.png"
import profile from "../Assets/profile.png"
import completed from "../Assets/completed.png"

const win = Dimensions.get('window')
const styles=StyleSheet.create({
    images : {
        width:win.width,
        height: 300
    }
})

const OnboardingPage : () => React$Node = () => {
    let pages = [
        {backgroundColor: "#FFFFFF", image:<Image style={styles.images} resizeMode="contain" source={welcomeImage}/>,title: "Welcome", subtitle: "SPE Apps is application for alumnee of Energy Generation System EEPIS"},
        {backgroundColor: "#FFFFFF", image:<Image style={styles.images} resizeMode="contain" source={meetFriends}/>,title: "Meet Your Friends", subtitle: "Find your friends and other alumnee"},
        {backgroundColor: "#FFFFFF", image:<Image style={styles.images} resizeMode="contain" source={keepUpdated}/>,title: "Keep Updated", subtitle: "Always get latest information from alumnee board or campus"},
        {backgroundColor: "#FFFFFF", image:<Image style={styles.images} resizeMode="contain" source={profile}/>,title: "Great Profile", subtitle: "Update your profile with your work and education history."},
        {backgroundColor: "#FFFFFF", image:<Image style={styles.images} resizeMode="contain" source={completed}/>,title: "You're Good to Go", subtitle: "Explore SPE Apps as much as you like"},
    ]
    return(
        <Onboarding pages={pages} />
    )
}

export default OnboardingPage