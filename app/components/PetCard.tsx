import * as React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import type { Pets } from '../api/petsApi';
import { HeartFilled, HeartOutlined } from '../assets';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { likeOrUnlikePets } from '../utils/helpers';

function PetCard(props: Pets) {
  // the default value of false here would be replaced with a boolean
  // indicating whether or not the pet has been liked

  const likedPets = useAppSelector(store => store.likedPets);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{props.name}</Text>
      </View>

      <Pressable onPress={() => likeOrUnlikePets(dispatch, props.name)}>
        {likedPets.includes(props.name) ? (
          <HeartFilled fill="#DE0202" />
        ) : (
          <HeartOutlined />
        )}
      </Pressable>
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
    marginRight: 15,
  },
  title: { color: 'black', fontSize: 16 },
});
