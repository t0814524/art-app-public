import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Search } from "../filter/search";
import { Thumbnail } from "../image";
import { useEffect, useState } from "react";
import { getArtworkData } from "./artworks";
import { Dict } from "../../App";

const style = StyleSheet.create({
    grid: {
        // flex: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: 'orange',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: "100%"
    },
    gridItem: {
        // flex: 2,

        width: "50%",
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black"
    },
})

export type ArtworksApiResp = (Dict<any> & { api_link: string })[]

export type ArtworkData = Dict<any> & {
    title: string
    imgae_id: string | null
    description: string
    /**
     * year
     */
    date_display: string
    medium_display: string
    artist_title: string
    dimensions: string
}

// export const Grid: React.FC<{ itemss: GridItemProps[] }> = ({ itemss = [] }) => {
export const Grid: React.FC<{ items: ArtworksApiResp, onItemPress: (item: ArtworkData) => void }> = (props) => {
    let [itemCnt, setItemCnt] = useState(0);
    let items = props.items

    return (
        <ScrollView>
            <View id="grid" style={style.grid}>


                {/* {items.map(item => { setItemCnt(itemCnt + 1); return GridItem({ key: item.api_link, apiLink: item.api_link, onPress: props.onItemPress }) })} */}
                {items.map(item => <GridItem
                    apiLink={item.api_link}
                    onPress={props.onItemPress}
                    key={item.api_link}
                ></GridItem>)}

            </View>
        </ScrollView>
    );
};

//todo: should i use props?
// export const GridItem = (key: number, apiLink: string, onPress: (item: ArtworkData) => void) => {

export const GridItem: React.FC<{ apiLink: string, onPress: (item: ArtworkData) => void }> = ({ apiLink, onPress }) => {
    let [item, setItem] = useState<ArtworkData>({
        title: "loading...",
        artist_title: "loading...",
        imgae_id: null,
        date_display: "",
        description: "",
        dimensions: "",
        medium_display: ""
    });


    useEffect(() => {
        getArtworkData(apiLink).then(res => {
            // console.log(res.data.title)
            // console.log(res.data.image_id)
            if (res.data) setItem(res.data)
        }).catch((err: any) => {
            console.error(err)
        })
    }, []);

    return (
        <View id="gridItem" style={style.gridItem}>
            <TouchableOpacity onPress={() => { onPress(item) }}>
                <Text>{item.title}</Text>
                <Thumbnail imageId={item.image_id}></Thumbnail>

            </TouchableOpacity>
        </View >
    );
};