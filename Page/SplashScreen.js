import React, {Component} from "react"
import {
    StyleSheet,
    StatusBar,
    View,
    Image
} from "react-native"

import splashScreenLogo from "../Assets/splash-screen-logo.png"
import {Actions} from "react-native-router-flux"

const SPLASH_SCREEN_DURATION = 2000 //in ms
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

const SplashScreen : () => React$Node = () => {
    setTimeout(()=> {
        Actions.replace("login",{})
    }, SPLASH_SCREEN_DURATION)

    return(
        <View style={styles.mainview}>
            <StatusBar barStyle="dark-content"/>
            <Image source={splashScreenLogo} style={styles.splashscreenlogo}/>
        </View>
    )
}

export default SplashScreen