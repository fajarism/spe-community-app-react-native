import React, {useState} from 'react'
import {
    Text, 
    StyleSheet,
    View,
    FlatList,
    SafeAreaView
} from 'react-native'

import { ListItem } from 'react-native-elements'
import Icon from "react-native-vector-icons/MaterialIcons"

import color from "../../Variable/Color"
import { notificationsDummy } from '../../Variable/Dummy'

const styles = StyleSheet.create({
    mainview :{
        backgroundColor:"#FAFAFA"
    },
    title : {
        fontWeight:"bold",
        fontSize:28,
        color : color.primarycolor,
        paddingTop:8
    },
    subtitle : {
        fontWeight:"500",
        fontSize:14,
        color : "grey",
        paddingTop:4
    },

    searchbarcontainer : {
        backgroundColor : "#FAFAFA",
        marginLeft : 8,
        marginRight : 4
    },

    inputcontainerstyle : {
        backgroundColor : color.primarycolor,
    },

    inputstyle : {
        color : "white",
        fontSize : 14
    }
})
const NotificationsFragment : () => React$Node = (props) => {
    const resolveNotificationText = (type) => {
        switch(type){
            case 0 : return ` commented on your status`
            case 1 : return ` commented on your profile picture update`
            case 2 : return ` commented on your job promotion`
        }
    }

    const renderItem = ({item, index})  => {
        // console.log(index !== 0)
        if(index !== 0) return (<ListItem containerStyle={{backgroundColor:"#FFFFFF"}} 
            leftAvatar={{
                // source:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
                title : item.name.substring(0,1)
            }}
            title={<Text><Text style={{fontWeight:"bold"}}>{item.name}</Text>{resolveNotificationText(item.type)}</Text>}
            subtitle="2 days ago"/>)

        return (<ListItem title={<View>
            <Text style={styles.title}>{`Notifications`}</Text>
            <Text style={styles.subtitle}>{`No new notifications available`}</Text>
        </View>}/>)
    }
    return(
        <SafeAreaView>
            <View style={styles.mainview}>

            <FlatList data={notificationsDummy} 
                keyExtractor={(item, index) => item.id}
                containerStyle={{backgroundColor:"#FAFAFA"}}
                renderItem={renderItem}/>
        </View>

        </SafeAreaView>
    )
}

export default NotificationsFragment