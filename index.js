/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './Page/SplashScreen'
import MainApp from './MainApp'
import {name as appName} from './app.json';
// import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => MainApp);
