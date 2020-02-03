import React, {useState} from 'react'
import {
    Text, 
    StyleSheet,
    View,
    FlatList,
    SegmentedControlIOSBase
} from 'react-native'

import { SearchBar, ListItem } from 'react-native-elements'
import Icon from "react-native-vector-icons/MaterialIcons"

import color from "../../Variable/Color"
import { friendsDummy } from '../../Variable/Dummy'

const styles = StyleSheet.create({
    mainview :{
        backgroundColor:"#FAFAFA",
        paddingBottom : 160
    },
    title : {
        fontWeight:"bold",
        fontSize:28,
        color : color.primarycolor,
        paddingLeft:16,
        paddingRight:16,
        paddingTop:24
    },
    subtitle : {
        fontWeight:"500",
        fontSize:14,
        color : "grey",
        marginBottom: 12,
        paddingLeft:16,
        paddingRight:16,
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
const FriendsFragment : () => React$Node = (props) => {
    const [searchText, setsearchtext] = useState("")
    const [isonsearchmode, setonsearchmode] = useState(false)

    const onSearchBarChange = async (search) => {
        await setonsearchmode(search.length > 0)
        await setsearchtext(search)
    }

    const renderItem = ({item})  => (<ListItem containerStyle={{backgroundColor:"#FAFAFA"}} 
        leftAvatar={{
            // source:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
            title : item.name.substring(0,1)
        }}
        title={item.name}
        subtitle={item.shortbio}></ListItem>)

    return(
        <View style={styles.mainview}>
            <Text style={styles.title}>Connections</Text>
            <Text style={styles.subtitle}>{`${friendsDummy.length} connections available`}</Text>

            <SearchBar placeholder={`Search connection by name`} 
                platform= "default"
                value={searchText} 
                onChangeText={onSearchBarChange} 
                round={true} 
                containerStyle={styles.searchbarcontainer}
                inputContainerStyle={styles.inputcontainerstyle}
                placeholderTextColor="#CACACA"
                searchIcon={<Icon name="search" color="#FAFAFA" size={16}/>}
                clearIcon={<Icon onPress={() => setsearchtext("")} name="clear" color="#FAFAFA" size={16}/>}
                inputStyle={styles.inputstyle}/>

            <FlatList data={isonsearchmode ? friendsDummy.filter(dummy => dummy.name.toLowerCase().includes(searchText.toLowerCase())) : friendsDummy}
                keyExtractor={(item, index) => item.id}
                containerStyle={{backgroundColor:"#FAFAFA"}}
                renderItem={renderItem}/>
        </View>
    )
}

export default FriendsFragment