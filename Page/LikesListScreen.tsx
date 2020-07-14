import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import UserLikesItem from '../Component/UserLikesItem'

import user01 from '../Assets/user-01.jpg'
import user02 from '../Assets/user-02.jpg'

const LikesListScreen = () => {

    return(
        <SafeAreaView>
            <ScrollView>
                <UserLikesItem name="Sarah Connor" image={user01}/>
                <UserLikesItem name="Alexandria Haney" image={user01}/>
                <UserLikesItem name="Gina Huff" image={user02}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default LikesListScreen