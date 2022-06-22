import * as React from 'react';
import { View, Text, Button, FlatList, StatusBar } from 'react-native';
import { Pets, useLazyGetPetsQuery } from '../api/petsApi';
import { Loader, PageHeader, PetCard } from '../components';
import { updateLikedPets, useAppDispatch } from '../redux/store';
import localStore from '../utils/asyncstorage';

function HomeScreen() {
  // to keep track of all the pets gotten even after scrolling;
  const [pets, setPets] = React.useState<Pets[]>([]);
  const [page, setPage] = React.useState(0);

  const [
    fetchPets,
    { isFetching, data: newPets, isError, isLoading },
  ] = useLazyGetPetsQuery();

  const dispatch = useAppDispatch()

  const getLikedPetsFromLocalStoreAndUpdateReduxStore = async () => {

    const { data } = await localStore.get<string[]>(localStore.FAV_PET_KEY);

    dispatch(updateLikedPets(data as string[]))
  }

  // fetch pets when the page changes
  React.useEffect(() => {
    getLikedPetsFromLocalStoreAndUpdateReduxStore()
    fetchPets(page);
  }, [page]);
  

  // updates the main list of pets whenever a new list comes in
  React.useEffect(() => {
    if (newPets) {
      setPets(pets => (page === 0 ? newPets : [...pets, ...newPets]));
    }
  }, [newPets]);

  function refetchPets() {
    setPage(0);
  }

  if (isLoading) {
    return (
      <Loader
        style={{ marginTop: 50 }}
        isLoading={isLoading}
        isError={isError}
        error="Something happened"
      />
    );
  }

  if (isError) {
    return (
      <View>
        <Text style={{ color: 'black' }}>Error... Please try again</Text>
        <Button title="Try Again" onPress={() => fetchPets(0)} color="green" />
      </View>
    );
  }

  function _renderPets({ item }: { item: Pets }) {
    return <PetCard {...item} />;
  }

  return (
    <View style={{ backgroundColor: 'white' }}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <PageHeader title="All Dogs" />
      <FlatList
        data={pets}
        // only show the refresh icon when there's a requesting for the first set of pets
        refreshing={isFetching && page === 0}
        onRefresh={refetchPets}
        renderItem={_renderPets}
        keyExtractor={item => String(item.id)}
        onEndReached={() => setPage(page => page + 1)}
        onEndReachedThreshold={0.2}
        // added to show bottom spacing/padding
        ListFooterComponent={() => <View style={{ height: 70 }}></View>}
      />
      <Loader
        isError={isError}
        isLoading={isFetching}
        error={'Something'}
        style={{ marginBottom: 20 }}
      />
    </View>
  );
}

export default HomeScreen;
