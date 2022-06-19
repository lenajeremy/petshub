import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavScreen, HomeScreen } from '../screens';


const BottomTab = createBottomTabNavigator();


const RootNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="screen">
      <BottomTab.Group screenOptions={{ headerShown: false }}>
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Favorites" component={FavScreen} />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
