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
  ListRenderItem,
} from 'react-native';
import { Pets } from '../api/petsApi';
import { HeartFilled } from '../assets';
import { PageHeader } from '../components';
import { useAppSelector } from '../redux/store';
import { likeOrUnlikePets } from '../utils/helpers';
import { useAppDispatch } from '../redux/store';

interface LikeDogCardProps extends Pets {
  index: number;
  totalLength: number;
}

const LikedDogCard = React.memo((props: LikeDogCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        ...styles.petCard,
        [props.index % 2 === 0 ? 'paddingRight' : 'paddingLeft']:
          props.index === props.totalLength - 1 ? 0 : 10,
      }}
    >
      <Image source={{ uri: props.imageUrl }} style={styles.petImage} />
      <View style={styles.petCardFooter}>
        <Text style={{ flex: 1, marginRight: 10, fontSize: 16 }}>
          {props.name}
        </Text>
        <Pressable onPress={() => likeOrUnlikePets(dispatch, props)}>
          <HeartFilled fill="#DE0202" />
        </Pressable>
      </View>
    </View>
  );
});

function FavScreen() {
  const likedPets = useAppSelector(store => store.likedPets);

  const _renderDogCard: ListRenderItem<Pets> = React.useCallback(
    ({ item, index }) => {
      return (
        <LikedDogCard
          name={item.name}
          imageUrl={item.imageUrl}
          id={item.id}
          index={index}
          totalLength={likedPets.length}
        />
      );
    },
    [likedPets],
  );

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
        ListFooterComponent={() => <View style={{ height: 120 }} />}
      />
    </View>
  );
}

export default FavScreen;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 24,
  },
  petCard: {
    flex: 1,
    display: 'flex',
    paddingVertical: 10,
  },
  petCardFooter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  petImage: {
    height: 150,
    width: '100%',
    borderRadius: 10,
  },
});
