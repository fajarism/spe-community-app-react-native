import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FlexColumn from './FlexColum'
import FlexRow from './FlexRow'
import WrapFlexRow from './WrapFlexRow'
import Icon from 'react-native-vector-icons/FontAwesome5'
import color from '../Variable/Color'

import myPhoto from '../Assets/self-profile.jpg'

const AdminFeedsCard = ({
        name = "", 
        date = "", 
        status = "",
        profilepicture = myPhoto,
        oncardpressed = () => {}
    }) => {

    return(
        <TouchableOpacity onPress={oncardpressed}>
            <View style={styles.feedsbox}>
                <FlexColumn>
                    <FlexRow>
                        <Icon name="user-circle" size={48}/>
                        <FlexColumn containerStyle={styles.userfeedcontainer}> 
                            <FlexRow>
                                <Icon name="star" solid color={color.primarycolor} size={16}
                                    style={{marginRight : 4, alignSelf : "center"}}/>
                                <Text style={styles.usernametext}>SPE Admin</Text>
                            </FlexRow>
                            <Text style={styles.userdate}>{date}</Text>
                        </FlexColumn> 
                    </FlexRow>
                    <Text style={styles.usercontent}>
                        {status}
                    </Text>
                </FlexColumn>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
    },

    usernametext : {
        fontSize : 16,
        fontWeight : "700",
        flex : 1,
        alignSelf : "center"
    },

    userdate : {
        fontSize : 16,
        color : color.gray,
    },

    usercontent : {
        fontSize : 18,
        marginTop : 36,
        marginBottom : 24
    },

    userfeedcontainer : {
        marginLeft : 16,
        flex : 1,
    }
})

export default AdminFeedsCard