import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, ColorPropType, View, Image } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import FlexColumn from '../Component/FlexColum'
import Icon from 'react-native-vector-icons/FontAwesome5'
import color from '../Variable/Color'
import { ScrollView } from 'react-native-gesture-handler'
import WrapFlexColumn from '../Component/WrapFlexColumn'
import WrapFlexRow from '../Component/WrapFlexRow'
import FlexRow from '../Component/FlexRow'

import feed01 from '../Assets/feeds-01.jpg'
import { Actions } from 'react-native-router-flux'

const PostNewFeedScreen = () => {
    const [imageList, setImageList] = useState<string[]>([])

    const onPostNewFeedPressed = () => {
        Actions.pop()
    }

    const onAttachImageButtonPressed = () => {
        const imagePickerOptions = {
            title : "Attach Image",
            storageOptions : {
                path : "images"
            }
        }

        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              } else {
                const source = { uri: response.uri };
            
                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            
                setImageList([response.uri])
              }
        });
    }

    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <FlexColumn>
                    <TouchableOpacity style={{alignSelf : "flex-end", marginVertical : 16}}
                        onPress={() => Actions.pop()}>
                        <Icon name="times" size={24} color={color.gray}/>
                    </TouchableOpacity>
                    <Icon name="plus-square" size={36} color={color.primarycolor} style={styles.posticon}/>
                    <Text style={styles.newposttitle}>New Post</Text>
                    <Text style={styles.newpostsubtitle}>Share your thoughts or opinions to your connections</Text>
                    <TextInput placeholder="Another great day to start your work. How are you feeling, guys?" 
                        multiline={true}
                        style={styles.feedtextinput}/>

                    { imageList.length > 0 ? <TouchableOpacity onPress={() => Actions.imageviewer({image : feed01})}>
                            <Image source={{uri : imageList[0]}} style={styles.feedimagecontainer}/>
                            <TouchableOpacity style={styles.feedimageclear} onPress={() => setImageList([])}>
                                <Icon name="times" size={24} style={{alignSelf : "center"}} color={color.gray}/>
                            </TouchableOpacity>
                        </TouchableOpacity>: <View/>}

                    { imageList.length === 0 ?<FlexRow containerStyle={{marginVertical : 24}}>
                        <TouchableOpacity style={{marginHorizontal : 4}} onPress={onAttachImageButtonPressed}>
                            <View style={styles.addimagebutton}>
                                <Icon name="image" color={color.lightgray} size={36}/>
                            </View>
                        </TouchableOpacity>
                    </FlexRow> : <View/>}
                    <TouchableOpacity onPress={onPostNewFeedPressed}>
                        <WrapFlexRow containerStyle={styles.postnewfeedbuttoncontainer}>
                            <Icon name="plus" size={16} color={color.white}/>
                            <Text style={styles.postnewfeedbuttontext}>Post New Feed</Text>
                        </WrapFlexRow>
                    </TouchableOpacity>
                </FlexColumn>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height : "100%",
        padding : 24
    },

    posticon : {
        alignSelf : "center"
    },

    newposttitle : {
        fontWeight : "700",
        color : color.black,
        alignSelf : "center",
        fontSize : 20,
        marginTop : 16
    },

    newpostsubtitle : {
        fontWeight : "300",
        color : color.gray,
        alignSelf : "center",
        fontSize : 16,
        marginTop : 8,
        textAlign : "center"
    },

    feedtextinput : {
        fontSize : 16,
        marginTop : 36,
        maxHeight : "50%"
    },

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
        marginLeft : 16
    },

    addimagebutton : {
        width : "100%",
        display : "flex",
        borderRadius : 8,
        borderStyle : "dashed",
        borderColor : color.lightgray,
        borderWidth : 1,
        padding : 16,
    },

    feedimagecontainer : {
        width : "100%",
        height : 200,
        resizeMode : "contain",
        marginVertical : 16,
        borderRadius : 8
    },
    
    feedimageclear : {
        position : "absolute",
        width : 40,
        height : 40,
        top : 0,
        right : 16,
        backgroundColor : color.lightgray,
        padding : 8,
        alignSelf : "center",
        borderRadius : 48
    }
})

export default PostNewFeedScreen