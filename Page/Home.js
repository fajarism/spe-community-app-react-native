/* eslint-disable */
import React, {Component, useState} from "react"
import {
    StyleSheet,
    StatusBar,
    View,
    Image,
    SafeAreaView
} from "react-native"
import {Actions} from "react-native-router-flux"
import {BottomNavigation, Text} from "react-native-paper"

import FriendsFragment from "./HomeFragment/FriendsFragment"
import NotificationsFragment from "./HomeFragment/NotificationsFragment"
import ProfileFragment from "./HomeFragment/ProfileFragment"
import color from "../Variable/Color"
import HomeFragment from "./HomeFragment/HomeFragment"

const HomeRoute = () => <HomeFragment/>
const ProfileRoute = () => <ProfileFragment/>
const FriendsRoute = () => <FriendsFragment/>
const NotificationRoute = () => <NotificationsFragment/>
// const FriendsRoute = () => <Text>Profile</Text>
// const NotificationRoute = () => <Text>Profile</Text>

const styles = StyleSheet.create({
    mainview : {
        flex : 1,
        backgroundColor : "#FAFAFA",
        justifyContent : "center",
        alignItems:"center"
    },
    splashscreenlogo : {
        width : 200,
        height:200
    }
})

const Home : () => React$Node = (props) => {
    const [iscleared, setCleared] = useState(false)
    const [navindex, setNavIndex] = useState(0)

    if(props.firsttime) {
        Actions.reset("home", {firsttime: false})
    }

    let navigationState = [
        {key: "home", title : "Home", icon :"home", color: color.hometabcolor},
        {key: "friends", title : "Connections", icon :"account-group", color: color.friendstabcolor},
        {key: "notification", title : "Notifications", icon :"bell", color : color.notificationtabcolor},
        {key: "profile", title : "Profile", icon :"face-profile", color: color.profiletabcolor}
    ]

    let renderScene = BottomNavigation.SceneMap({
        home : HomeRoute,
        friends : FriendsRoute,
        notification : NotificationRoute,
        profile : ProfileRoute
        
    })
    return(
        <BottomNavigation
            navigationState={{index : navindex, routes : navigationState}}
            onIndexChange={(index) => (setNavIndex(index))}
            renderScene={renderScene}
            shifting={true}/>
        // <View style={styles.mainview}>
        //     <StatusBar barStyle="dark-content"/>
        //     <Image source={splashScreenLogo} style={styles.splashscreenlogo}/>
        // </View>
    )
}

export default Home