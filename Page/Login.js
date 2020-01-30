import React, {useState} from "react"
import {
    View,
    StatusBar,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Button
} from "react-native"
import{Actions} from "react-native-router-flux"

import splashScreenLogo from "../Assets/splash-screen-logo.png"

import color from "../Variable/Color"
import isEmailValid from "../Utilities/IsEmailValid"

const styles = StyleSheet.create({
    mainview : {
        flex : 1,
    },
    topsubview : {
        paddingTop:30,
        marginLeft : 30,
        marginRight : 10,
        justifyContent: "center"
    },
    bottomsubview : {
        paddingTop:30,
        marginLeft : 30,
        marginRight : 10,
        justifyContent: "center"
    },
    imagelogo : {
        width:100,
        height:100
    },
    welcometitle : {
        fontWeight : "bold",
        fontSize : 25,
        marginTop: 15,
        fontFamily : "Roboto"
    },
    welcomesubtitle : {
        fontWeight : "600",
        fontSize : 16,
        fontFamily : "Roboto",
        marginTop : 5,
        color : "grey"
    },

    label : {
        // backgroundColor : color.secondarycolor,
        // color: "#fafafa",
        // paddingLeft: 5,
        // paddingRight : 5,
        // paddingTop : 10,
        // paddingBottom : 10,
        // alignSelf : "flex-start"
        fontWeight:"900"
    },
    logininput : {
        borderColor : "red"
    },

})

const Login : () => React$Node = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginbuttondisabled, setLoginButtonDisabled] = useState(true)

    let onEmailChange = (value) => {
        setEmail(value)
        setLoginButtonDisabled(!isEmailValid(email) || email.length < 5 || password.length < 5)
    }

    let onPasswordChange = (value) => {
        setPassword(value)
        setLoginButtonDisabled(!isEmailValid(email) || email.length < 5 || password.length < 5)
    }

    return(
        <View style={styles.mainview}>
            <View style={styles.topsubview}>
                <Image source={splashScreenLogo} style={styles.imagelogo}/>
                <Text style={styles.welcometitle}>{`Welcome`}</Text>
                <Text style={styles.welcomesubtitle}>{`Please login to continue`}</Text>
            </View>
            <View style={styles.bottomsubview}>
                <Text style={styles.label}>{`Email`}</Text>
                <TextInput autoCapitalize="none" keyboardType="email-address" 
                    placeholder={`Input your email`} value={email} onChangeText={(value) => (onEmailChange(value))}/>
                
                <Text style={styles.label}>{`Password`}</Text>
                <TextInput autoCapitalize="none" secureTextEntry={true}
                    placeholder={`Input your password`} value={password} onChangeText={(value) => (onPasswordChange(value))}/>

                <Button title="LOGIN" color={`${color.primarycolor}`} disabled={loginbuttondisabled} onPress={() => (Actions.replace("home", {}))}/>
            </View>
        </View>
    )
}

export default Login