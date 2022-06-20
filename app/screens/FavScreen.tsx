import * as React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';

function FavScreen() {
  
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <Text style={{ color: 'black' }}>This is the fav screen</Text>
      <Text style={{ color: 'black' }}>WIDTH: {width}</Text>
      <Text style={{ color: 'black' }}>HEIGHT: {height}</Text>
    </View>
  );
}

export default FavScreen;
