import React from 'react'
import FlexRow from './FlexRow'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { TextInput, Text, View, StyleSheet } from 'react-native'
import FlexColumn from './FlexColum'
import color from '../Variable/Color'

const IconInputText = ({ 
    iconName = "", 
    iconSize = 16, 
    iconColor = color.primarycolor,
    placeholder = "Lorem Ipsum", 
    containerStyle = {},
    inputContainerStyle = {},
    inputTitle = "",
    inputText = "",
    onInputTextChange = (value) => {},
    password
}) => {

    return(
        <FlexColumn containerStyle={{...styles.containerStyle, ...containerStyle}}>
            {inputTitle !== "" ? <Text style={{...styles.inputTitleStyle}}>{inputTitle}</Text> : <View/>}
            <FlexRow containerStyle={{ ...styles.inputContainerStyle, ...inputContainerStyle}}>
                <Icon name={iconName} size={iconSize} color={iconColor} style={styles.iconStyle}/>
                <TextInput placeholder={placeholder} style={styles.inputStyle} {...{secureTextEntry : password}}
                    onChangeText={(value) => onInputTextChange(value)} value={inputText}/>
            </FlexRow>
        </FlexColumn>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
        padding : 8,
        paddingHorizontal : 24
    },

    inputContainerStyle : {
        borderColor : color.gray,
        borderRadius : 8,
        borderWidth : 1,
        padding : 8
    },

    inputStyle : {
        marginLeft : 8,
        flex  :1,
        fontSize : 18
    },

    iconStyle : {
        padding : 8,
    },

    inputTitleStyle : {
        marginBottom : 8,
        fontSize : 16,
        fontWeight : "700"
    }
})

export default IconInputText