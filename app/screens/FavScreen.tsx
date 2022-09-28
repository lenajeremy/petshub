import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Pets } from '../api/petsApi';
import { HeartFilled } from '../assets';
import { PageHeader } from '../components';
import { useAppSelector } from '../redux/store';
import { likeOrUnlikePets } from '../utils/helpers';
import { useAppDispatch } from '../redux/store';

const LikedDogCard = React.memo((props: Pets) => {
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: 'green' }}>
      <Image source={{ uri: props.imageUrl }} style={styles.petImage} />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text>{props.name}</Text>
        <Pressable onPress={() => likeOrUnlikePets(dispatch, props)}>
          <HeartFilled fill="red" />
        </Pressable>
      </View>
    </View>
  );
});

function FavScreen() {
  const { width, height } = useWindowDimensions();
  const likedPets = useAppSelector(store => store.likedPets);

  const _renderDogCard = React.useCallback(({ item }) => {
    return (
      <LikedDogCard name={item.name} imageUrl={item.imageUrl} id={item.id} />
    );
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <PageHeader title="Dogs I Like" />
      <FlatList
        data={likedPets}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        renderItem={_renderDogCard}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

export default FavScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 24,
  },
  petImage: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
});
