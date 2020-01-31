import React from "react"
import Modal from "react-native-modal"
import {Text, View} from "react-native"
import {Button} from "react-native-elements"
import PropTypes, { bool, func } from "prop-types"

const BaseModal : () => React$Node = (props) => {
    return(
        <Modal isVisible={props.ismodalvisible} onBackdropPress={() => (props.setmodalvisible(false))}>
            <View style={{backgroundColor:"white", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                {props.children}
            </View>
        </Modal>
    )
}

BaseModal.propTypes = {
    ismodalvisible : PropTypes.bool.isRequired,
    setmodalvisible : PropTypes.func.isRequired
}

export default BaseModal