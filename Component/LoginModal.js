import React from "react"
import {
    Text,
    View,
    Image,
    StyleSheet
} from "react-native"
import {Button} from "react-native-elements"

import BaseModal from "./BaseModal"
import registerInfo from "../Assets/register-info.png"
import color from "../Variable/Color"

const styles = StyleSheet.create({
    mainview : {flex:1, paddingBottom:30, paddingTop:30},
    registerimage : {width:"100%", height:250, alignItems:"center", justifyContent:"center"},
    registerinfo : {textAlign:"center", fontSize:16, marginLeft:30, marginRight:30, marginTop: 20},
    registerinputlabel : {
        fontSize : 14,
        fontWeight: "bold",
        color: color.materialblue,
        marginTop : 10,
        textAlign: "center"
    }, 

    closemodalbutton : {
        backgroundColor : color.primarycolor,
        marginLeft:15,
        marginRight: 15,
        marginTop: 30
    },
})

const LoginModal : () => React$Node = (props) => {
    return(
        <BaseModal ismodalvisible={props.ismodalvisible} setmodalvisible={props.setmodalvisible}>
            <View style={styles.mainview}>
                <Image source={registerInfo} style={styles.registerimage}></Image>
                <Text style={styles.registerinfo}>{`Please contact administrator in this email`}</Text>
                <Text type="outline"
                style={styles.registerinputlabel}>{`admin@specommunityapp.com`}</Text>
                <Button title="Close" buttonStyle={styles.closemodalbutton} onPress={() => (props.setmodalvisible(false))}/>
            </View>
        </BaseModal>
    )
}

export default LoginModal