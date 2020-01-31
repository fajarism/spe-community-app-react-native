import React, {Component, useState} from "react"
import {
    StyleSheet,
    StatusBar,
    View,
    Image
} from "react-native"

import Icon from "react-native-vector-icons/MaterialIcons"
import splashScreenLogo from "../Assets/splash-screen-logo.png"
import {Actions} from "react-native-router-flux"
import {BottomNavigation, Text} from "react-native-paper"


const HomeRoute = () => <Text>Home</Text>
const ProfileRoute = () => <Text>Profile</Text>
const FriendsRoute = () => <Text>Friends</Text>
const NotificationRoute = () => <Text>Notifications</Text>

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

// export default class SplashScreen extends Component {
//     componentDidMount() {
//         setTimeout(()=> {
//             Actions.replace("login",{})
//         }, SPLASH_SCREEN_DURATION)
//     }

//     render() {
//         return(
//             <View style={styles.mainview}>
//                 <StatusBar barStyle="dark-content"/>
//                 <Image source={splashScreenLogo} style={styles.splashscreenlogo}/>
//             </View>
//         )
//     }
// }

const Home : () => React$Node = (props) => {
    const [iscleared, setCleared] = useState(false)
    const [navindex, setNavIndex] = useState(0)

    if(props.firsttime) {
        Actions.reset("home", {firsttime: false})
    }

    let navigationState = [
        {key: "home", title : "Home", icon :"home"},
        {key: "friends", title : "Friends", icon :"account-group"},
        {key: "notification", title : "Notifications", icon :"bell"},
        {key: "profile", title : "Profile", icon :"face-profile"}
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