import { useState, useEffect, PropsWithChildren } from 'react';
// 'react-native-vector-icons/';


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Alert,
    Button
} from 'react-native';
import { ActiveFilters } from './ActiveFilters';
import MultiSelectComponent from './multiSel';

import { Dict } from "../../App";

export type FilterType = "date-created-from" | "date-created-to" | "artist" | "colortodo?"

export type FilterData = {
    [key in FilterType]?: (string | number)[] | number;
}

// interface FilterParams {
//     type: FilterType
//     value: string | number
// }


export const FilterSection = () => {
    return (
        <View
            style={{
                backgroundColor: "yellow"
                // flexDirection: "row"
            }}>
            <Text>
                Filter the search:
            </Text>
            <View
                style={{
                    // flexDirection: "row"

                }}>
                <ActiveFilters></ActiveFilters>
                <MultiSelectComponent></MultiSelectComponent>
            </View>
        </View>
    );
};
export const FilterYearRange = () => {

    let yearCurrent = new Date().getFullYear()
    console.log(yearCurrent)

    let [yearStart, setYearStart] = useState<number | undefined>(undefined);
    let [yearEnd, setYearEnd] = useState<number | undefined>(undefined);

    let filter = { type: "" }

    const setYear = (year: number, end?: boolean) => {
        console.log("handle date input")
        if (!Number.isInteger(year) || year > yearCurrent) {
            Alert.alert(
                'Invalid Date',
                'Please enter a valid year',
                [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
                { cancelable: false }
            );
        }
        if (!end) {
            // range start year
            console.log("set start year")
            setYearStart(year)
        } else {
            console.log("set end year")
            // range end year
            setYearEnd(year)

        }
        // setSearchQuery(text || "");
        // Filter data based on search query
        // fetch("https://api.artic.edu/api/v1/artworks/search?q=" + text).then(res => {
        //   console.log(res.data[0])
        // })


        setYearStart(year);
    };
    return (
        <View
            style={{
                // flexDirection: "row"
            }}>
            <Text>
                creation date range:
            </Text>
            <View
                style={{
                    flexDirection: "row"

                }}>

                <TextInput // start date
                    style={{ flex: 1, height: 40, width: "50%", borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                    keyboardType='numeric'
                    onChangeText={year => setYear(Number(year))}
                    placeholder='from date'
                    value={yearStart?.toString()}
                />
                <TextInput // end date
                    style={{ flex: 1, height: 40, width: "50%", borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                    keyboardType='numeric'
                    placeholder='to date'
                    onChangeText={year => setYear(Number(year), true)}
                    value={yearEnd?.toString()}
                />
            </View>
        </View>
    );
};