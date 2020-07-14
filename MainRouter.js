import React from 'react'
import {
    Router,
    Scene,
    Stack
} from "react-native-router-flux"

import SplashScreen from './Page/SplashScreen'
import Login from './Page/Login'
import Home from './Page/Home'
import OnboardingPage from './Page/OnboardingPages'
import ProfileFragment from './Page/HomeFragment/ProfileFragment'
import ImageViewerScreen from './Page/ImageViewerScreen'
import AdminAllPosts from './Page/AdminAllPosts'
import PostDetail from './Page/PostDetail'
import LikesListScreen from './Page/LikesListScreen'

const MainRouter = () => {
    return(
        <Router>
            <Stack key="root" initial="home">
                <Scene key="splashScreen" component={SplashScreen} title="Splash Screen" hideNavBar={true} />
                <Scene key="login" component={Login} title="Login" hideNavBar={true}/>
                <Scene key="home" component={Home} title="Home" hideNavBar={true}/>
                <Scene key="profile" component={ProfileFragment} title="Profile" hideNavBar={false}/>
                <Scene key="adminallpost" component={AdminAllPosts} title="News From Admin" hideNavBar={false}/>
                <Scene key="postdetail" component={PostDetail} title="Post" hideNavBar={false}/>
                <Scene key="likeslist" component={LikesListScreen} title="Likes" hideNavBar={false}/>
                <Scene key="imageviewer" component={ImageViewerScreen} title="Image" hideNavBar={false}/>
                <Scene key="onboarding" component={OnboardingPage} title="Onboarding" hideNavBar={true}/>
            </Stack>
        </Router>
    )
}

export default MainRouter