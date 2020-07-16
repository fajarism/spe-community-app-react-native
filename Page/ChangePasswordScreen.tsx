import React, { useState } from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native'
import IconInputText from '../Component/IconInputText'
import { Actions } from 'react-native-router-flux'
import color from '../Variable/Color'
import WrapFlexRow from '../Component/WrapFlexRow'
import Icon from "react-native-vector-icons/FontAwesome5"

const ChangePasswordScreen = () => {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    return(
        <SafeAreaView>
            <ScrollView style={{height : "100%"}}>
                <IconInputText
                    inputTitle="Old Password"
                    iconName="lock"
                    iconSize={24}
                    placeholder="Your old password"
                    containerStyle={{marginTop : 16}}
                    inputText={oldPassword}
                    onInputTextChange={(value) => setOldPassword(value)}
                    password/>

                <IconInputText
                    inputTitle="New Password"
                    iconName="lock"
                    iconSize={24}
                    placeholder="Your new password"
                    inputText={newPassword}
                    onInputTextChange={(value) => setNewPassword(value)}
                    password/>

                <IconInputText
                    inputTitle="Confirm Password"
                    iconName="lock"
                    iconSize={24}
                    placeholder="Confirm your new password"
                    inputText={confirmNewPassword}
                    onInputTextChange={(value) => setConfirmNewPassword(value)}
                    password/>

                <TouchableOpacity onPress={() => Actions.pop()} style={{marginRight : 24}}>
                    <WrapFlexRow containerStyle={styles.postnewfeedbuttoncontainer}>
                        <Text style={styles.postnewfeedbuttontext}>Change Password</Text>
                        <Icon name="chevron-right" size={16} color={color.white}/>
                    </WrapFlexRow>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    postnewfeedbuttoncontainer : {
        backgroundColor : color.primarycolor,
        padding : 16,
        marginTop : 24,
        width : "50%",
        alignSelf : "flex-end",
        borderRadius : 16
    },

    postnewfeedbuttontext : {
        fontSize : 16,
        color : color.white,
        marginRight : 16,
        alignSelf : "center"
    },
})

export default ChangePasswordScreen