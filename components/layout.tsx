import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Search } from "./filter/search";
import { ArtworkData, ArtworksApiResp, Grid } from "./main/artGrid";
import { Thumbnail } from "./image";
import { useEffect, useState } from "react";
import { ArtFilter, getArtworks } from "./main/artworks";
import { DetailSection } from "./detail/detailView";
import { ScrollView } from "react-native";

const styleLayout = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: "100%",
        backgroundColor: 'green',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: "100%"
    },
    searchSection: {
        flex: .5,
        backgroundColor: "yellow",
    },
    filterSection: {
        flex: 2,
        backgroundColor: "blue"
    },
    mainSection: {
        flex: 6,
        backgroundColor: "green"
    }

})

export type Page = "main" | "detail"
export const Layout = () => {


    // list of artworks fetched from api
    let [items, setItems] = useState<ArtworksApiResp>([]);
    let [detailData, setDetailData] = useState<ArtworkData>();
    let [page, setPage] = useState<Page>("main");
    let [filter, setFilter] = useState<ArtFilter>({});

    // todo: store image url so it doesnt need to get fetched if nav back

    // fetch artworks - default all artworks without filter
    useEffect(() => {
        console.log("use eff to get art")
        getArtworks(filter).then(res => {
            // console.log(res)
            if (res.data) setItems(res.data)
        })
        // .catch((err: any) => {
        //         console.error(err)
        //         //todo mb handle that
        //     })
    }, [filter]);

    const onFilterChange = (e: string) => {
        console.log("filter changed")
        console.log(e)
        if (!e) {
            console.log("no e")
            return
        }

        // set filter with new constraints
        if (e != filter.searchValue) setFilter({ searchValue: e })
        if (page != "main") setPage("main")


        // get filterd artworks
        // getArtworks(filter).then(res => {
        //     // set items to cause re-render of grid
        //     if (res.data) setItems(res.data)
        // })

    };

    return (
        <ScrollView>

            <View id="container" style={styleLayout.container}>
                <SafeAreaView // avoid notch blocking at top but show content all the way down
                    id="searchSection"
                    style={styleLayout.searchSection}
                >
                    {/* <Text>asdf</Text> */}
                    <Search
                        onEndEditing={onFilterChange}>

                    </Search>
                    {/* <Text>asdf</Text> */}

                </SafeAreaView >
                <View
                    id="filterSection"
                    style={styleLayout.filterSection}
                >

                </View >
                <View
                    id="mainSection"
                    style={styleLayout.mainSection}
                >
                    {
                        page == "detail" && detailData ?
                            <DetailSection data={detailData}></DetailSection>
                            :
                            <Grid items={items} onItemPress={(artworkData) => { setDetailData(artworkData); setPage("detail") }}></Grid>
                    }
                </View>
            </View >
        </ScrollView >
    );
};