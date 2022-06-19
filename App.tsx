import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import RootNavigator from './app/navigation';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import petsApi from './app/api/petsApi';

const App = () => {
  return (
    <ApiProvider api={petsApi}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApiProvider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
