import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FlexColumn from './FlexColum'
import FlexRow from './FlexRow'
import WrapFlexRow from './WrapFlexRow'
import Icon from 'react-native-vector-icons/FontAwesome5'
import color from '../Variable/Color'

import myPhoto from '../Assets/self-profile.jpg'

const UserImageFeedsCard = ({
        name = "", 
        date = "", 
        status = "",
        profilepicture = myPhoto,
        imagecontent,
        like = 0, 
        comment = 0, 
        onlikepressed = () =>{}, 
        onimagepressed = () => {},
        oncommentpressed = () => {},
        onuserpressed = () => {},
        oncardpressed = () => {},
        onlikeslistpressed = () => {}
    }) => {

    return(
        <TouchableOpacity onPress={oncardpressed}>
            <View style={styles.feedsbox}>
                <FlexColumn>
                    <TouchableOpacity onPress={onuserpressed}>
                        <FlexRow>
                            <Image source={profilepicture} width={48} height={48} style={{
                                height : 48,
                                width : 48,
                                resizeMode : "cover",
                                borderRadius : 24
                            }}/>
                            <FlexColumn containerStyle={styles.userfeedcontainer}> 
                                <FlexRow>
                                    <Text style={styles.usernametext}>{name}</Text>
                                </FlexRow>
                                <Text style={styles.userdate}>{date}</Text>
                            </FlexColumn> 
                        </FlexRow>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onimagepressed}>
                        <Image source={imagecontent} style={{
                            width : "100%",
                            height : 150,
                            resizeMode : "cover",
                            marginTop : 24
                        }}/>
                    </TouchableOpacity>

                    <Text style={styles.usercontent}>
                        {status}
                    </Text>

                    <TouchableOpacity onPress={onlikeslistpressed}>
                        <Text>Sarah connor and 3 others like this</Text>
                    </TouchableOpacity>
                    <View style={styles.divider}></View>

                    <FlexRow containerStyle={{marginTop : 16}}>
                        <TouchableOpacity onPress={onlikepressed}>
                            <WrapFlexRow containerStyle={{marginRight : 16}}>
                                <Icon name="heart" solid size={16} color={color.primarycolor} style={{marginRight : 4}}/>
                                <Text>{`${like} likes`}</Text>
                            </WrapFlexRow>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={oncommentpressed}>
                            <WrapFlexRow>
                                <Icon name="comment" solid size={16} color={color.primarycolor} style={{marginRight : 4}}/>
                                <Text>{`${comment} comments`}</Text>
                            </WrapFlexRow>
                        </TouchableOpacity>
                    </FlexRow>
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

export default UserImageFeedsCard