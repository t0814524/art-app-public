import { View, StyleSheet, Text, SafeAreaView, Modal, ScrollView } from "react-native";
import { ArtworkData } from "../main/artGrid";
// import { ImageZoomable } from "../imageZoom";
// import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import ImageViewer from 'react-native-image-zoom-viewer';
import React, { useState } from "react";
import { WebView } from 'react-native-webview';


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: "100%",
    }, imgSection: {
        minHeight: "10%",
        // flex: 1,
        backgroundColor: "red",
        width: "100%"
    },
    dataSection: {
        // height: "auto",
        minHeight: 500,
        // flex: 1,
        width: "100%",
        backgroundColor: "pink",
    }

})
export const DetailSection: React.FC<{ data: ArtworkData }> = ({ data }) => {
    let [imgZoomViewVisible, setImageZoomViewVisible] = useState(true);

    // console.log(data)
    return (

        <ScrollView style={style.container}>
            <View id="imgSection" style={style.imgSection}>
            </View>

            <View id="dataSection" style={style.dataSection}>
                <Text id="title">{data.title}</Text>
                <Text id="artist">Artist:{data.artist_title}</Text>
                <Text id="year">{data.date_display}</Text>
                <Text id="medium">Medium: {data.medium_display}</Text>
                <Text id="dimensions">Dimensions: {data.dimensions}</Text>

                {data.description ? <WebView
                    // scrollEnabled={false}
                    originWhitelist={['*']}
                    // source={{ html: 'Description: ' + data.description }}
                    source={{ html: data.description }}
                /> : <></>}

            </View>
        </ ScrollView>
    );
};