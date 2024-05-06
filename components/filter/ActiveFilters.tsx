import { useState, useEffect, PropsWithChildren } from 'react';
import RNPickerSelect from 'react-native-picker-select';

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
import { FilterData, FilterType } from './Filter';

export const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    filterGroup: {
        borderColor: "black",
        borderWidth: 2
    },
    filterBtn: {
        borderColor: "black",
        borderWidth: 2
    }
});


export const ActiveFilters = () => {
    let [yearStart, setYearStart] = useState<number | undefined>(undefined);
    let [activeFilters, setActiveFilters] = useState<number | undefined>(undefined);

    const addFilter = () => {
        for (let filter in filterData) {

        }
        return (<FilterBtn></FilterBtn>)
    };
    let filterData: FilterData = {
        "artist": ["alfred", "sepp"],
        "date-created-from": 1767
    }
    return (
        <View
            style={{
                // flexDirection: "row"
            }}>
            <Text style={styles.sectionTitle}>
                active Filters:
            </Text>
            {/* <View
                style={{
                    flexDirection: "row"
                }}> */}



            {Object.keys(filterData).map(key => {
                let k = key as FilterType
                return (
                    <View
                        key={k}
                        style={styles.filterGroup}
                    >
                        <Text>{k}</Text>
                    </View>
                    // <Button title={filterData[k]}></Button>
                );
            })}


            {/* <FilterBtn></FilterBtn> */}
            {/* </View> */}
        </View >
    );
};
export const FilterBtn = () => {
    let [yearStart, setYearStart] = useState<number | undefined>(undefined);
    let [yearEnd, setYearEnd] = useState<number | undefined>(undefined);

    const addFilter = (year: number, end?: boolean) => {

    };
    return (

        <View
            style={{
                flexDirection: "row"

            }}>

            <Button
                title='filter1'>

            </Button>
        </View>
    );
};