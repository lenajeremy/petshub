import * as React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { useGetPetsQuery } from '../api/petsApi';

function HomeScreen() {

  const { data, isFetching, isError, error } = useGetPetsQuery();

  if (isFetching || !data) {
    return <Text style={{ color: 'black' }}>Loading...</Text>;
  }

  if (isError) {
    return (
      <View>
        <Text style={{ color: 'black' }}>Error... Please try again</Text>
        <Button title="Try Again" onPress={() => {}} color="green" />
      </View>
    );
  }

  return (
    <ScrollView style = {styles.pageContainer}>
      <Text style={{ color: 'black' }}>This is the home screen</Text>
      <Text style={{ color: 'black' }}>{JSON.stringify(data, null, 3)}</Text>
    </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
})