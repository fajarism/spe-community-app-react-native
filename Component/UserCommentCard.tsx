import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FlexColumn from './FlexColum'
import FlexRow from './FlexRow'
import WrapFlexRow from './WrapFlexRow'
import Icon from 'react-native-vector-icons/FontAwesome5'
import color from '../Variable/Color'

import myPhoto from '../Assets/self-profile.jpg'
import { Actions } from 'react-native-router-flux'

const UserCommentCard = ({
        name = "", 
        date = "", 
        comment = "",
        profilepicture = myPhoto,
        // onlikepressed = () =>{}, 
        // onuserpressed = () => {},
        // oncommentpressed = () => {},
        // oncardpressed = () => {}
    }) => {

    return(
            <View style={styles.feedsbox}>
                <FlexColumn>
                    <FlexRow>
                        <TouchableOpacity onPress={() => Actions.profile({})}>
                            <Image source={profilepicture} width={48} height={48} style={{
                                height : 48,
                                width : 48,
                                resizeMode : "cover",
                                borderRadius : 24
                            }}/>
                        </TouchableOpacity>
                        <FlexColumn containerStyle={styles.userfeedcontainer}>
                            <TouchableOpacity onPress={() => Actions.profile({})}>
                                <FlexRow>
                                    <Text style={styles.usernametext}>{name}</Text>
                                </FlexRow>        
                            </TouchableOpacity> 
                        
                            <Text style={styles.usercontent}>
                                {comment}
                            </Text>
                            <Text style={styles.userdate}>{date}</Text>
                        </FlexColumn> 
                    </FlexRow>
                </FlexColumn>

                <View style={{width : "100%", height : 1, 
                backgroundColor : color.divider, 
                marginTop : 16,
                marginBottom : 16}}/>
            </View>
    )
}

const styles = StyleSheet.create({
    feedsbox : {
        backgroundColor : "#FFFFFF",
        paddingHorizontal : 8,
        borderRadius : 8,
        marginBottom : 8,
        marginTop : 8
    },
    
    postnewfeedtext : {
        color : color.white,
        fontWeight : "700",
        fontSize : 16,
        alignSelf : "center"
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
        marginTop : 4,
        marginBottom : 16
    },

    userfeedcontainer : {
        marginLeft : 16,
        flex : 1,
    }
})

export default UserCommentCard