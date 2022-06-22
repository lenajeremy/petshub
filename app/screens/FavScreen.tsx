import * as React from 'react';
import { View, Text, StatusBar, useWindowDimensions } from 'react-native';
import { PageHeader } from '../components';
import { useAppSelector } from '../redux/store';
import localStore from '../utils/asyncstorage';

function FavScreen() {
  const { width, height } = useWindowDimensions();
  const likedPets = useAppSelector(store => store.likedPets);

  React.useEffect(() => {
    localStore.get(localStore.FAV_PET_KEY).then(data => console.log(data));
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <PageHeader title="All Dogs" />
      <Text>{JSON.stringify(likedPets, null, 3)}</Text>
    </View>
  );
}

export default FavScreen;
