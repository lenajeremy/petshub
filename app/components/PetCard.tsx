import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import type { Pets } from '../api/petsApi';

function PetCard(props: Pets) {

  return (
    <View style={styles.container}>
      <View style = {{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{props.name}</Text>
      </View>
    </View>
  );
}

export default React.memo(PetCard);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 15
  },
  title: { color: 'black', fontSize: 16 },
});
