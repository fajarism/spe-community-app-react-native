/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './Page/SplashScreen'
import MainRouter from './MainRouter'
import {name as appName} from './app.json';
// import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => MainRouter);
