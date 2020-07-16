import React, {useState} from "react"
import {View, Image, StyleSheet, Dimensions, ScrollView, SafeAreaView, Linking} from "react-native"
import {Text} from "react-native-elements"
import FAIcon from 'react-native-vector-icons/FontAwesome5'
import Icon from "react-native-vector-icons/MaterialIcons"

import selfProfile from "../../Assets/self-profile.jpg"
import color from "../../Variable/Color"
import { TouchableOpacity, TouchableHighlight } from "react-native-gesture-handler"
import { Actions } from "react-native-router-flux"
import FlexColumn from "../../Component/FlexColum"
import FlexRow from "../../Component/FlexRow"
import WrapFlexRow from "../../Component/WrapFlexRow"
import WrapFlexColumn from "../../Component/WrapFlexColumn"

const win = Dimensions.get("window")

const ProfileSettingFragment = () => {
    const onLogoutClicked = () => {
        // Do clear preference
        
        // Logout here
        Actions.login({})
    }

    const onContactUsClicked = () => {
        let subject = `Questions about SPE App`
        let body = `Dear Admin. I'm ${'Alexandria Haney'}, I have question about SPE App.`
        Linking.openURL(`mailto:support@example.com?subject=${encodeURI(subject)}&body=${encodeURI(body)}`)
    }

    return(
        <SafeAreaView>
        <ScrollView style={styles.mainview}>
            <View style={styles.backgroundImage}/>
            <View style={styles.imagecontainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.imageviewer({image : selfProfile})}>
                    <Image style={styles.profileimage} source={selfProfile}/>
                </TouchableOpacity>
                <FlexColumn containerStyle={{marginTop : 16}}>
                    <FlexRow containerStyle={{justifyContent : "center"}}>
                        <WrapFlexColumn>
                            <Text style={styles.name}>Alexandria Haney</Text>
                            <Text style={styles.shortbio}>Software Developer at Telkom</Text>
                        </WrapFlexColumn>

                        <WrapFlexColumn containerStyle={{alignSelf : "center", marginLeft : 16}}> 
                            <TouchableOpacity onPress={() => Actions.profilechangename({})}>
                                <FAIcon name="pen" size={20} color={color.primarycolor}/>
                            </TouchableOpacity>
                        </WrapFlexColumn>
                    </FlexRow>
                    <TouchableOpacity onPress={() => Actions.profile({})}>
                        <WrapFlexRow containerStyle={styles.viewcvcontainer}>
                            <FAIcon name="trophy" size={20} color={color.white}/>
                            <Text style={styles.viewcvbuttontext}>View Profile</Text>
                        </WrapFlexRow>
                    </TouchableOpacity>
                </FlexColumn>

                <FlexColumn containerStyle={{marginTop : 36}}>
                    <TouchableOpacity style={{marginVertical : 8}} onPress={() => Actions.changepassword({})}>
                        <FlexRow>
                            <View style={styles.settingsicon}>
                                <FAIcon name="lock" size={16} color={color.white}/>
                            </View>
                            <Text style={styles.settingstext}>Change Password</Text>
                            <FAIcon name="chevron-right" size={16} color={color.primarycolor} style={{alignSelf : "center"}}/>
                        </FlexRow>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginVertical : 8}} onPress={onContactUsClicked}>
                        <FlexRow>
                            <View style={styles.settingsicon}>
                                <FAIcon name="question-circle" solid size={16} color={color.white}/>
                            </View>
                            <Text style={styles.settingstext}>Contact Us</Text>
                            <FAIcon name="chevron-right" size={16} color={color.primarycolor} style={{alignSelf : "center"}}/>
                        </FlexRow>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginVertical : 8}} onPress={onLogoutClicked}>
                        <FlexRow>
                            <View style={styles.settingsicon}>
                                <FAIcon name="sign-out-alt" size={16} color={color.white}/>
                            </View>
                            <Text style={styles.settingstext}>Logout</Text>
                            <FAIcon name="chevron-right" size={16} color={color.primarycolor} style={{alignSelf : "center"}}/>
                        </FlexRow>
                    </TouchableOpacity>
                </FlexColumn>

            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainview : {
      flexDirection:"column",
      height : "100%",
      width : "100%"
    },
    backgroundImage : {
        height : 200,
        width: win.width + 10,
        backgroundColor: color.profiletabcolor,
        borderBottomEndRadius: 60,
        marginLeft : -5,
        marginRight: -5,
        borderBottomStartRadius: 60,
        position: "absolute",
        top: 0,
        left:0
    },
    imagecontainer : {
        padding: 20,
        paddingTop: 30
    },
    profileimage : {
        height:300,
        width:"100%",
        alignItems:"center",
        borderRadius:10
    },
    name : {
        fontWeight:"bold",
        fontSize : 30,
        marginTop : 12,
        color: color.primarycolor,
        alignSelf : "center"
    },
    shortbio : {
        fontSize : 14,
        color: "grey",
        marginBottom : 16,
        alignSelf : "center",
        marginTop : 4
    },
    
    header : {
        fontSize : 16,
        color : color.primarycolor,
        fontWeight : "bold",
        marginTop: 8
    },

    about : {
        fontSize : 16,
        marginTop: 8,
        lineHeight: 22
    },

    contactcontainer : {
        flexDirection :"row",
        marginTop : 8
    },

    iconcontainer : {
        backgroundColor: color.profiletabcolor,
        borderRadius : 8,
        height : 36
    },

    detailcontainer : {
        flex : 1,
        marginLeft : 8
    },

    profileicon : {
        alignSelf : "center",
        padding : 8
    },

    contacttext : {
        padding : 8,
        paddingTop : 0,
        paddingBottom : 12,
        fontSize : 16,
        fontWeight : "bold",
        color : color.primarycolor
    },

    contacttextnormal : {
        padding : 8,
        paddingTop : 0,
        paddingBottom : 12,
        fontSize : 16,
        fontWeight : "500",
        color : color.primarycolor,
        lineHeight: 22
    },

    contactsubtitle : {
        fontSize : 12,
        color : "grey",
        marginLeft : 8
    },
     
    detailheader : {
        fontSize : 16,
        color : color.primarycolor,
        fontWeight : "bold",
        marginLeft : 8,
        marginBottom : 8
    },

    workhistorytitle : {
        padding : 8,
        paddingTop : 0,
        paddingBottom : 0,
        fontSize : 16,
        fontWeight : "bold",
        color : color.primarycolor
    },

    workhistorydetail : {
        fontSize : 16,
        marginLeft : 8,
        lineHeight : 22,
        marginBottom : 16
    },
     workhistoryyear : {
        fontSize : 14,
        color : "grey",
        marginLeft : 8,
        marginBottom : 8
     },

    viewcvbuttontext : {
        fontSize : 16,
        fontWeight : "700",
        marginLeft : 16,
        color : color.white
    },

    viewcvcontainer : {
        alignSelf : "center", 
        backgroundColor : color.profiletabcolor, 
        paddingVertical : 16,
        paddingHorizontal : 24,
        borderRadius : 16
    },

    settingsicon : {
        padding : 16,
        backgroundColor : color.profiletabcolor,
        borderRadius : 16
    },

    settingstext : {
        marginLeft : 16,
        flex : 1,
        fontWeight : "700",
        fontSize : 18,
        alignSelf : "center",
        color : color.primarycolor
    }
})

export default ProfileSettingFragment