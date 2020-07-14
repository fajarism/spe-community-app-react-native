import React from 'react'
import { SafeAreaView, Text, ScrollView, StyleSheet } from 'react-native'
import UserFeedsCard from '../Component/UserFeedsCard'
import UserCommentCard from '../Component/UserCommentCard'

const PostDetail = () => {
    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <UserFeedsCard
                    name="Alexandria Haney"
                    status="Doing a great project. As a software engineer, we thrive to deliver the best and state-of-the-art application just for you.
                    Bravo team. Keep up the good work."
                    date="today"
                    />

                <Text style={styles.commenttitle}>Comments</Text>
                <UserCommentCard
                    name="Gina Huff"
                    date="3 hours ago"
                    comment="Wow, great joob. Keep amazing and inspiring"
                    />
                
                <UserCommentCard
                    name="Gina Huff"
                    date="3 hours ago"
                    comment="Wow, great joob. Keep amazing and inspiring"
                    />
                
                <UserCommentCard
                    name="Gina Huff"
                    date="3 hours ago"
                    comment="Wow, great joob. Keep amazing and inspiring"
                    />
                
                <UserCommentCard
                    name="Gina Huff"
                    date="3 hours ago"
                    comment="Wow, great joob. Keep amazing and inspiring"
                    />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 24,
        paddingTop : 8
    },

    commenttitle : {
        fontWeight : "700",
        fontSize : 24,
        marginVertical : 16
    }
})
export default PostDetail