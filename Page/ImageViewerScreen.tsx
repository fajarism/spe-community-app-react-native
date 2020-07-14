import React from 'react'
import { View, Dimensions } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

const ImageViewerScreen = ({
    image
}) => {

    const { width, height } = Dimensions.get("window")
    const imageUrl = [{
        url : "",
        props : {
            source : image
        }
    }]


    return(
        <View style={{
            width : width,
            height : height
        }}> 
            <ImageViewer imageUrls={imageUrl}/>
        </View>
    )
}

export default ImageViewerScreen