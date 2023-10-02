import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function App(): JSX.Element {
  return (
    <View>
      <Text>Hello word</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
