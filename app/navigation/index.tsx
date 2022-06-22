import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavScreen, HomeScreen } from '../screens';
import { CatIcon, HeartFilled } from '../assets';

const BottomTab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="screen" screenOptions={{ tabBarStyle: { elevation: 0, height: 70 }}}>
      <BottomTab.Group
        screenOptions={{ headerShown: false, tabBarActiveTintColor: '#212227', tabBarItemStyle: {} }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CatIcon fill={focused ? undefined : 'gray'} />
            ),
            title: 'All Dogs',
          }}
        />
        <BottomTab.Screen
          name="Favorites"
          component={FavScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <HeartFilled fill={focused ? undefined : 'gray'} />
            ),
          }}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
};

export default RootNavigator;
