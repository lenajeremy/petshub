import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
const BottomTab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="screen">
      <BottomTab.Screen name="AllPets" component={() => <Text>Home</Text>} />
      <BottomTab.Screen name="SavedPets" component={() => <Text>Home</Text>} />
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
