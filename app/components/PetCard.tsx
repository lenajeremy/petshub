import * as React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import type { Pets } from '../api/petsApi';
import { HeartFilled, HeartOutlined } from '../assets';

function PetCard(props: Pets) {

  // the default value of false here would be replaced with a boolean
  // indicating whether or not the pet has been liked
  const [ isLiked, setIsLiked ] = React.useState(Math.random() < 0.5 ? true : false)

  const likePet = () => {
    console.log('likeeeeeeiiinnggggg', props.name);
    setIsLiked(!isLiked)
  }

  return (
    <View style={styles.container}>
      <View style = {{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{props.name}</Text>
      </View>
      
      <Pressable onPress = {likePet}>
        {
          isLiked ? <HeartFilled fill = '#DE0202' /> : <HeartOutlined />
        }
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
    marginRight: 15
  },
  title: { color: 'black', fontSize: 16 },
});
