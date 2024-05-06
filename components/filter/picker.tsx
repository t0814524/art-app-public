import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyPicker = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RNPickerSelect
      useNativeAndroidPickerStyle = {false}
        onValueChange={(value) => setSelectedValue(value)}
        items={[
          { label: 'asdf 1', value: 'asdf' },
          { label: 'bsdf 2', value: 'bsdf' },
          { label: 'csdf 3', value: 'csdf' },
        ]}
        value={selectedValue}
      />
      <Text>Selected value: {selectedValue}</Text>
    </View>
  );
};

export default MyPicker;
