import React, {useState} from "react"
import {View, Image, StyleSheet, Dimensions, ScrollView} from "react-native"
import {Text} from "react-native-elements"
import Icon from "react-native-vector-icons/MaterialIcons"


import selfProfile from "../../Assets/self-profile.jpg"
import color from "../../Variable/Color"
import { TouchableOpacity, TouchableHighlight } from "react-native-gesture-handler"
import { Actions } from "react-native-router-flux"


const win = Dimensions.get("window")

const styles = StyleSheet.create({
    mainview : {
      flexDirection:"column",
      flex: 1,
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
        color: color.primarycolor
    },
    shortbio : {
        fontSize : 14,
        color: "grey",
        marginBottom : 16
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
     }
})

const ProfileFragment : () => React$Node = (props) => {
    return(
        <ScrollView style={styles.mainview}>
            <View style={styles.backgroundImage}/>
            <View style={styles.imagecontainer}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.imageviewer({image : selfProfile})}>
                    <Image style={styles.profileimage} source={selfProfile}/>
                </TouchableOpacity>
                <Text style={styles.name}>Alexandria Haney</Text>
                <Text style={styles.shortbio}>Software Developer at Telkom</Text>

                <View style={styles.contactcontainer}>
                    <View style={styles.iconcontainer}>
                        <Icon name="phone" style={styles.profileicon} size={20} color="white"/>
                    </View>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.contactsubtitle}>Phone</Text>
                        <Text style={styles.contacttext}>+62 812-3344-5566</Text>

                        <Text style={styles.contactsubtitle}>Whatsapp</Text>
                        <Text style={styles.contacttext}>+62 812-3344-5566</Text>

                        <Text style={styles.contactsubtitle}>Telegram</Text>
                        <Text style={styles.contacttext}>t.me/alexandriahaney</Text>
                    </View>
                </View>

                <View style={styles.contactcontainer}>
                    <View style={styles.iconcontainer}>
                        <Icon name="mail" style={styles.profileicon} size={20} color="white"/>
                    </View>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.contactsubtitle}>Email Address</Text>
                        <Text style={styles.contacttext}>alexandria_haney@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.contactcontainer}>
                    <View style={styles.iconcontainer}>
                        <Icon name="info" style={styles.profileicon} size={20} color="white"/>
                    </View>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.contactsubtitle}>About</Text>
                        <Text style={styles.contacttextnormal}>Alexandria Haney is a 26-year-old software developer who enjoys horse riding, painting and meditation. She is kind and caring, but can also be very lazy and a bit impatient.
                            She is Indonesian. She finished school and then left academia.
                            Physically, Alexandria is in good shape. She is average-height with pale skin, blonde hair and black eyes.</Text>
                    </View>
                </View>

                <View style={styles.contactcontainer}>
                    <View style={styles.iconcontainer}>
                        <Icon name="work" style={styles.profileicon} size={20} color="white"/>
                    </View>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.detailheader}>Work Experience</Text>

                        <Text style={styles.workhistorytitle}>Software Developer at Telkom</Text>
                        <Text style={styles.workhistoryyear}>January 2018 - Present</Text>
                        <Text style={styles.workhistorydetail}>Develop, create, and modify general computer applications software or specialized utility programs. 
                            Analyze user needs and develop software solutions. Design software or customize software for client use with the 
                            aim of optimizing operational efficiency. May analyze and design databases within an application area, 
                            working individually or coordinating database development as part of a team. May supervise computer programmers.</Text>
                        
                        <Text style={styles.workhistorytitle}>Construction Managers at WIKA Gedung Surabaya</Text>
                        <Text style={styles.workhistoryyear}>January 2017 - December 2017</Text>
                        <Text style={styles.workhistorydetail}>Plan, direct, or coordinate, usually through subordinate supervisory personnel, 
                        activities concerned with the construction and maintenance of structures, facilities, and systems. 
                        Participate in the conceptual development of a construction project and oversee its organization, scheduling, budgeting, and implementation. 
                        Includes managers in specialized construction fields, such as carpentry or plumbing.</Text>

                    </View>
                </View>

                <View style={styles.contactcontainer}>
                    <View style={styles.iconcontainer}>
                        <Icon name="school" style={styles.profileicon} size={20} color="white"/>
                    </View>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.detailheader}>Education</Text>

                        <Text style={styles.workhistorytitle}>Master of Information and Technology at MIT</Text>
                        <Text style={styles.workhistoryyear}>September 2015 - September 2017</Text>
                        <Text style={styles.workhistorydetail}>Develop, create, and modify general computer applications software or specialized utility programs. 
                            Analyze user needs and develop software solutions.</Text>
                        
                        <Text style={styles.workhistorytitle}>Vocation Undergraduate of Energy Generation System at EEPIS</Text>
                        <Text style={styles.workhistoryyear}>September 2011 - September 2015</Text>
                        <Text style={styles.workhistorydetail}>Plan, direct, or coordinate, usually through subordinate supervisory personnel, 
                        activities concerned with the construction and maintenance of structures, facilities, and systems. 
                        </Text>

                    </View>
                </View>

                <View style={styles.contactcontainer}>
                    <View style={styles.iconcontainer}>
                        <Icon name="star" style={styles.profileicon} size={20} color="white"/>
                    </View>
                    <View style={styles.detailcontainer}>
                        <Text style={styles.detailheader}>Achievement</Text>

                        <Text style={styles.workhistorytitle}>3rd Place at Jenius Hackathon</Text>
                        <Text style={styles.workhistoryyear}>2020 January</Text>
                        <Text style={styles.workhistorydetail}>Develop, create, and modify general computer applications software or specialized utility programs. 
                            Analyze user needs and develop software solutions.</Text>
                       

                    </View>
                </View>

                {/* <Text style={styles.header}>About</Text>
                <Text style={styles.about}>Alexandria Haney is a 26-year-old software developer who enjoys horse riding, painting and meditation. She is kind and caring, but can also be very lazy and a bit impatient.
                    She is Indonesian. She finished school and then left academia.
                    Physically, Alexandria is in good shape. She is average-height with pale skin, blonde hair and black eyes.</Text> */}
            </View>
        </ScrollView>
    )
}

export default ProfileFragment