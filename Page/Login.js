import React, {useState} from "react"
import {
    View,
    StatusBar,
    StyleSheet,
    Image,
    Text
} from "react-native"
import {Button, Input, Overlay} from "react-native-elements"
import{Actions} from "react-native-router-flux"

import LoginModal from "../Component/LoginModal"

import splashScreenLogo from "../Assets/splash-screen-logo.png"

import color from "../Variable/Color"
import isEmailValid from "../Utilities/IsEmailValid"
import Icon from "react-native-vector-icons/MaterialIcons"

const styles = StyleSheet.create({
    mainview : {
        flex : 1,
    },
    topsubview : {
        paddingTop:30,
        paddingLeft : 30,
        paddingRight : 10,
        paddingBottom : 15,
        justifyContent: "center",
    },
    bottomsubview : {
        paddingTop:15,
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

    inputview : {
        marginBottom:20,
        marginLeft : -10
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
        backgroundColor : color.primarycolor,
        marginLeft:-5
    },

    registerinput : {
        borderColor : "#FAFAFA",
        marginLeft: -5,
        marginTop : 5
    },

    registerinputlabel : {
        fontSize : 14,
        fontWeight: "bold",
        color: color.materialblue,
        marginTop : 10,
        textAlign: "center"
    }, 
    
    inputlabel : {
        color : color.primarycolor
    },

    loginicon : {
        marginLeft : 0,
        marginRight: 8
    }

})

const Login : () => React$Node = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isloginbuttondisabled, setLoginButtonDisabled] = useState(true)
    const [ismodalvisible, setModalVisible] = useState(false)
    const [isloading, setIsLoading] = useState(false)

    let onEmailChange = (value) => {
        setEmail(value)
        setLoginButtonDisabled(!isEmailValid(email) || email.length < 1 || password.length < 1)
    }

    let onPasswordChange = (value) => {
        setPassword(value)
        setLoginButtonDisabled(!isEmailValid(email) || email.length < 1 || password.length < 1)
    }

    let doLogin = () => {
        // Do Login Here
        setIsLoading(true)
        setTimeout(() => {
            Actions.push("onboarding", {})
            setIsLoading(false)
        }, 4000)

    }

    let doRegister = () => {

    }

    return(
        <View style={styles.mainview}>
            <View style={styles.topsubview}>
                <Image source={splashScreenLogo} style={styles.imagelogo}/>
                <Text style={styles.welcometitle}>{`Welcome`}</Text>
                <Text style={styles.welcomesubtitle}>{`Please login to continue`}</Text>
            </View>

            <View style={styles.bottomsubview}>
                <View style={styles.inputview}>
                    <Input autoCapitalize="none" keyboardType="email-address" label={`Email Address`} labelStyle={styles.inputlabel}
                        placeholder={`email@address.com`} value={email} onChangeText={(value) => (onEmailChange(value))} leftIconContainerStyle={styles.loginicon}
                        leftIcon={
                            <Icon name={`email`} size={24} color={color.primarycolor} raised={true}/>
                        }/>
                </View>
                
                <View style={styles.inputview}>
                    <Input autoCapitalize="none" secureTextEntry={true} label={`Password`} labelStyle={styles.inputlabel}
                        placeholder={`Password`} value={password} leftIconContainerStyle={styles.loginicon}
                        leftIcon={
                            <Icon name={`lock`} size={24} color={color.primarycolor} raised={true}/>
                        }
                        onChangeText={(value) => (onPasswordChange(value))}/>
                </View>
                
                <Button title="Login" buttonStyle={styles.logininput} 
                    raised={true} disabled={isloginbuttondisabled}
                    loading={isloading}
                    onPress={() => (doLogin())}/>

                <Text type="outline"
                    style={styles.registerinputlabel}
                    onPress={() => (setModalVisible(true))}>{`don't have account ? find it here.`}</Text>
            </View>

            <LoginModal ismodalvisible={ismodalvisible} setmodalvisible={setModalVisible}/>
        </View>
    )
}

export default Login