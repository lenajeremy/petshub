import * as React from 'react';
import { ActivityIndicator, Text, View, StyleSheet, ViewStyle, StyleProp } from 'react-native';

function Loader({
  isLoading,
  isError,
  error,
  style,
}: {
  isLoading: boolean;
  isError: boolean;
  error: any;
  style?: StyleProp<ViewStyle>
}) {
  if (isLoading)
    return (
      <View style={[styles.container, style]}>
        <ActivityIndicator />
        <Text style = {styles.text}>Loading... Please Wait</Text>
      </View>
    );

  if (isError && error) {
    return <Text>An Error Occurred: {error}</Text>;
  }

  // returns null if there is no error and it's no longer loading
  return null;
}

export default Loader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black'
  }
});
