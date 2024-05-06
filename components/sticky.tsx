import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, Animated } from 'react-native';

const StickyHeader = () => {
    const [scrollY] = useState(new Animated.Value(0));
    const headerHeight = 100; // Height of the sticky header

    const searchBarTranslateY = scrollY.interpolate({
        inputRange: [0, headerHeight],
        outputRange: [0, -headerHeight],
        extrapolate: 'clamp',
    });

    const filterSectionHeight = 50; // Height of the filter section

    const filterSectionTranslateY = scrollY.interpolate({
        inputRange: [0, headerHeight + filterSectionHeight],
        outputRange: [0, -filterSectionHeight],
        extrapolate: 'clamp',
    });

    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: headerHeight,
                    backgroundColor: 'blue',
                    transform: [{ translateY: searchBarTranslateY }],
                    zIndex: 1, // Ensure it's above the content
                }}>
                {/* Search bar component */}
                <TextInput
                    style={{ flex: 1, margin: 10, borderRadius: 5, backgroundColor: 'white' }}
                    placeholder="Search"
                />
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: headerHeight,
                    left: 0,
                    right: 0,
                    height: filterSectionHeight,
                    backgroundColor: 'green',
                    transform: [{ translateY: filterSectionTranslateY }],
                    zIndex: 1, // Ensure it's above the content
                }}>
                {/* Filter section component */}
                <View style={{ flex: 1, margin: 10, backgroundColor: 'white', borderRadius: 5 }}>
                    <Text>filter</Text>
                    <Text>filter</Text>
                    <Text>filter</Text>
                    <Text>filter</Text>
                    <Text>filter</Text>
                    <Text>filter</Text>
                    {/* Filter elements */}
                </View>
            </Animated.View>
            <ScrollView
                style={{ flex: 1 }}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}>
                {/* Content */}
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
                <Text>cont</Text>
            </ScrollView>
        </View>
    );
};

export default StickyHeader;
