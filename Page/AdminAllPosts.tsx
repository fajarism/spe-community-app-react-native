import React from 'react'
import { SafeAreaView, Dimensions, StyleSheet, View } from 'react-native'
import FlexColumn from '../Component/FlexColum'
import AdminFeedsCard from '../Component/AdminFeedsCard'
import { ScrollView } from 'react-native-gesture-handler'


const { width, height } = Dimensions.get("window")

const AdminAllPosts = () => {

    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AdminFeedsCard 
                    date="Today"
                    status="Hi, this is your beloved admin. 
                    We want to tell you that this apps is now ready to use. 
                    Please feel free to contact us if you experience any error when using this apps."/>

                <AdminFeedsCard 
                    date="3d"
                    status="Hi, admin's here. We are sorry to tell you that we have experinced some error
                    when you post new feed. Your new post will not be shown to others nor they can like or comment it.
                    We are stil searching what might caused this error. You can still use the apps to find your connections or see their profile"/>


                <AdminFeedsCard 
                    date="1w"
                    status="How's your day? Hope you feel great today. We are opening a donation for our friend Alexandria.
                    She needs help for her disertation research project. If you want to donate, feel free to contact her directly."/>
            
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        width : width,
        height : "100%",
        paddingHorizontal : 24,
        paddingTop : 24,
        marginBottom : 100
    }
})

export default AdminAllPosts