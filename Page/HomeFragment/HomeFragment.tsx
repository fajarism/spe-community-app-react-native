import React from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image } from "react-native";
import color from "../../Variable/Color";
import FlexColumn from "../../Component/FlexColum";
import FlexRow from "../../Component/FlexRow";
import Icon from "react-native-vector-icons/FontAwesome5"
import { TouchableOpacity } from "react-native-gesture-handler";
import myPhoto from "../../Assets/self-profile.jpg"
import WrapFlexRow from "../../Component/WrapFlexRow";

const HomeFragment = () => {

    return(
        <SafeAreaView>
            <ScrollView style={styles.homecontainer}>
                <FlexRow>
                    <Text style={styles.admintitle}>News From Admin</Text>
                    <TouchableOpacity>
                        <Text style={styles.adminseeall}>View All</Text>
                    </TouchableOpacity>
                </FlexRow>
                <View style={styles.feedsbox}>
                    <FlexColumn>
                        <FlexRow>
                            <Icon name="user-circle" size={48}/>
                            <FlexColumn containerStyle={styles.adminfeedcontainer}> 
                                <FlexRow>
                                    <Icon name="star" solid color={color.primarycolor} size={16}
                                        style={{marginRight : 4, alignSelf : "center"}}/>
                                    <Text style={styles.adminnametext}>SPE Admin</Text>
                                </FlexRow>
                                <Text style={styles.admindate}>Today</Text>
                            </FlexColumn> 
                        </FlexRow>
                        <Text style={styles.admincontent}>Hi, this is your beloved admin. We want to tell you that this apps is now ready to use. 
                            Please feel free to contact us if you experience any error when using this apps.</Text>
                    </FlexColumn>
                </View>

                <FlexColumn containerStyle={styles.feedcontainer}>
                    <Text style={styles.feedtitle}>Your Feeds</Text>
                    <TouchableOpacity>
                        <FlexRow containerStyle={styles.createpostbuton}>
                            <Icon name="plus" size={16} color={color.white} style={{marginRight : 8, alignSelf : "center"}}/>
                            <Text style={styles.postnewfeedtext}>Post New Feed</Text>
                        </FlexRow>
                    </TouchableOpacity>

                    <View style={styles.feedsbox}>
                        <FlexColumn>
                            <FlexRow>
                                <Image source={myPhoto} width={48} height={48} style={{
                                    height : 48,
                                    width : 48,
                                    resizeMode : "cover",
                                    borderRadius : 24
                                }}/>
                                <FlexColumn containerStyle={styles.adminfeedcontainer}> 
                                    <FlexRow>
                                        <Text style={styles.adminnametext}>You</Text>
                                    </FlexRow>
                                    <Text style={styles.admindate}>Today</Text>
                                </FlexColumn> 
                            </FlexRow>
                            <Text style={styles.admincontent}>
                                Doing a great project. As a software engineer, we thrive to deliver the best and state-of-the-art application just for you.
                                Bravo team. Keep up the good work.
                            </Text>

                            <Text>Sarah connor and 3 others like this</Text>
                            <View style={styles.divider}></View>

                            <FlexRow containerStyle={{marginTop : 16}}>
                                <WrapFlexRow containerStyle={{marginRight : 16}}>
                                    <Icon name="heart" solid size={16} color={color.primarycolor} style={{marginRight : 4}}/>
                                    <Text>4 likes</Text>
                                </WrapFlexRow>

                                <WrapFlexRow>
                                    <Icon name="comment" solid size={16} color={color.primarycolor} style={{marginRight : 4}}/>
                                    <Text>10 comments</Text>
                                </WrapFlexRow>
                            </FlexRow>
                        </FlexColumn>
                    </View>

                    {/* <View style={styles.feedsbox}>
                        <FlexColumn>
                            <FlexRow>
                                <Icon name="user-circle" size={48}/>
                                <FlexColumn containerStyle={styles.adminfeedcontainer}> 
                                    <FlexRow>
                                        <Icon name="star" solid color={color.primarycolor} size={16}
                                            style={{marginRight : 4, alignSelf : "center"}}/>
                                        <Text style={styles.adminnametext}>SPE Admin</Text>
                                    </FlexRow>
                                    <Text style={styles.admindate}>Today</Text>
                                </FlexColumn> 
                            </FlexRow>
                            <Text style={styles.admincontent}>Hi, this is your beloved admin. We want to tell you that this apps is now ready to use. 
                                Please feel free to contact us if you experience any error when using this apps.</Text>
                        </FlexColumn>
                    </View> */}
                </FlexColumn>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homecontainer : {
        padding : 24,
        paddingBottom : 48
    },

    adminnametext : {
        fontSize : 16,
        fontWeight : "700",
        flex : 1,
        alignSelf : "center"
    },

    admindate : {
        fontSize : 16,
        color : color.gray,
    },

    admincontent : {
        fontSize : 18,
        marginTop : 36,
        marginBottom : 24
    },

    adminfeedcontainer : {
        marginLeft : 16,
        flex : 1,
    },

    admintitle : {
        fontWeight : "700",
        color : color.black,
        fontSize : 20,
        marginBottom : 16,
        flex : 1
    },

    adminseeall : {
        fontWeight : "500",
        color : color.primarycolor,
        fontSize : 20,
        marginBottom : 16.

    },

    feedcontainer : {
        marginTop : 36,
        marginBottom : 48
    },

    feedtitle : {
        fontWeight : "700",
        color : color.black,
        fontSize : 20
    },

    feedsbox : {
        backgroundColor : color.box,
        padding : 24,
        borderRadius : 8,
        marginBottom : 8,
        marginTop : 8
    },

    createpostbuton : {
        backgroundColor : color.primarycolor,
        borderRadius : 8,
        padding : 16,
        marginTop : 24,
        width : "50%",
        marginBottom : 16
    },
    
    postnewfeedtext : {
        color : color.white,
        fontWeight : "700",
        fontSize : 16,
        alignSelf : "center"
    },

    divider : {
        width : "100%",
        height : 1,
        marginTop : 16,
        backgroundColor : color.lightgray
    }
})

export default HomeFragment