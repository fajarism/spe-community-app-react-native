import React from "react";
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image } from "react-native";
import color from "../../Variable/Color";
import FlexColumn from "../../Component/FlexColum";
import FlexRow from "../../Component/FlexRow";
import Icon from "react-native-vector-icons/FontAwesome5"
import { TouchableOpacity } from "react-native-gesture-handler";
import myPhoto from "../../Assets/self-profile.jpg"
import WrapFlexRow from "../../Component/WrapFlexRow";
import UserFeedsCard from "../../Component/UserFeedsCard";
import AdminFeedsCard from "../../Component/AdminFeedsCard";
import UserImageFeedsCard from "../../Component/UserImageFeedsCard";
import { Actions } from 'react-native-router-flux'

import userO1 from '../../Assets/user-01.jpg'
import userO2 from '../../Assets/user-02.jpg'
import feeds01 from '../../Assets/feeds-01.jpg'

const HomeFragment = () => {

    return(
        <SafeAreaView>
            <ScrollView style={styles.homecontainer}>
                <FlexRow>
                    <Text style={styles.admintitle}>News From Admin</Text>
                    <TouchableOpacity onPress={() => Actions.adminallpost({})}>
                        <Text style={styles.adminseeall}>View All</Text>
                    </TouchableOpacity>
                </FlexRow>
                <AdminFeedsCard
                    date="Today"
                    oncardpressed={() => console.log("Admin card pressed")}
                    status="Hi, this is your beloved admin. We want to tell you that this apps is now ready to use. 
                    Please feel free to contact us if you experience any error when using this apps."/>

                <FlexColumn containerStyle={styles.feedcontainer}>
                    <Text style={styles.feedtitle}>Your Feeds</Text>
                    <TouchableOpacity>
                        <FlexRow containerStyle={styles.createpostbuton}>
                            <Icon name="plus" size={16} color={color.white} style={{marginRight : 8, alignSelf : "center"}}/>
                            <Text style={styles.postnewfeedtext}>Post New Feed</Text>
                        </FlexRow>
                    </TouchableOpacity>

                    <UserFeedsCard
                        name="Alexandria Haney"
                        date="today"
                        status="Doing a great project. As a software engineer, we thrive to deliver the best and state-of-the-art application just for you.
                        Bravo team. Keep up the good work."
                        like={4}
                        comment={10}
                        onuserpressed={() => Actions.profile({})}
                        oncommentpressed={() => Actions.postdetail({})}
                        onlikepressed={() => console.log("Like pressed")}
                        onlikeslistpressed = {() => Actions.likeslist({})}
                        oncardpressed={() => Actions.postdetail({})}/>

                    <UserFeedsCard
                        name="Gina Huff"
                        date="23h ago"
                        status="Just finished a report paper. Don't forget to stretch your body and let your eyes rest for a bit.
                        Our body is our investment, make sure that it has its time to rejuvenate"
                        like={4}
                        profilepicture={userO1}
                        comment={10}
                        onuserpressed={() => Actions.profile({})}
                        oncommentpressed={() => Actions.postdetail({})}
                        onlikepressed={() => console.log("Like pressed")}
                        onlikeslistpressed = {() => Actions.likeslist({})}
                        oncardpressed={() => Actions.postdetail({})}/>

                    <UserImageFeedsCard
                        name="Monika Glass"
                        date="1d ago"
                        status="Invest on your tools. With good arsenal comes great productivity.
                            Don't hesitate to buy good quality products if it could boost your productivity.
                            Here are some of my tools to make a perfect handicraft"
                        like={4}
                        profilepicture={userO2}
                        comment={10}
                        imagecontent={feeds01}
                        onuserpressed={() => Actions.profile({})}
                        onimagepressed={() => Actions.imageviewer({image : feeds01})}
                        oncommentpressed={() => Actions.postdetail({})}
                        onlikepressed={() => console.log("Like pressed")}
                        onlikeslistpressed = {() => Actions.likeslist({})}
                        oncardpressed={() => Actions.postdetail({})}/>

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