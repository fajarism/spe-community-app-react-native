import React from 'react'
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux"

import SplashScreen from './Page/SplashScreen'
import Login from './Page/Login'
import Home from './Page/Home'

const MainApp = () => {
    return(
        <Router>
            <Stack key="root">
                <Scene key="splashScreen" component={SplashScreen} title="Splash Screen" hideNavBar={true} />
                <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
                <Scene key="home" component={Home} title="Home" hideNavBar={true}/>
            </Stack>
        </Router>
    )
}

export default MainApp