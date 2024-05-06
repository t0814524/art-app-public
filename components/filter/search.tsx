import { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TextInput, NativeSyntheticEvent, TextInputEndEditingEventData } from "react-native";
import { Page } from "../layout";

const style = StyleSheet.create({
    containerSearch: {
        flex: 1,
        minHeight: "100%",
        backgroundColor: 'green',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: "100%"
    },
    searchBar: {
        flex: 1,
        backgroundColor: "yellow",
    },
    backBtn: {
        flex: 1,
        backgroundColor: "blue"
    }
})

// export const Search: React.FC<{ onEndEditing: (val: string) => void }> = (props: { onEndEditing }) => {
export const Search = (props: { onEndEditing: (val: string) => void, page: Page }) => {
    let [searchValue, setSearchValue] = useState<string>("");

    // const handleSearch = (value: string) => {
    const handleSearch = async (e: string) => {

        // setSearchQuery(text);
        // Filter data based on search query
        // const filteredData = data.filter(item =>
        //   item.name.toLowerCase().includes(text.toLowerCase())
        // );


        console.log("search handle")
        console.log(searchValue)

        // setSearchQuery(text || "");
        // Filter data based on search query
        // let res = await fetch("https://api.artic.edu/api/v1/artworks/search?q=" + searchValue.toLowerCase())
        // let resJson = await res.json()
        // console.log(resJson)


        // fetch("https://api.artic.edu/api/v1/artworks/search?q=" + searchValue.toLowerCase())
        //     .then(async (res) => {
        //         console.log("res")
        //         let resJson = await res.json()
        //         resJson.data

        //     }).catch(err => {
        //         console.log(err)
        //     })


        setSearchValue(searchValue);
    };

    return (
        <View id="containerSearch" style={style.containerSearch}>
            {props.page != "main" ? (<View id="backBtn" style={style.backBtn}></View >
            : <></>)}//todo fix that after push
            <View id="searchField" style={style.searchBar}>
                <TextInput // end date
                    style={{
                        flex: 1, height: "100%", width: "100%", borderRadius: 20, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10
                    }}
                    placeholder='Search...'
                    onChangeText={val => setSearchValue(val)}
                    onEndEditing={(e) => props.onEndEditing(e.nativeEvent.text)}
                    value={searchValue}
                />

            </View>
        </View>
    );
};