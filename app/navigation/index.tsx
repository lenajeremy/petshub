import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavScreen, HomeScreen } from '../screens';
import { CatIcon, HeartFilled } from '../assets';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../redux/store';

const BottomTab = createBottomTabNavigator();

const RootNavigator = () => {
  const likedPets = useAppSelector(store => store.likedPets);

  return (
    <BottomTab.Navigator
      initialRouteName="screen"
      screenOptions={{ tabBarStyle: { elevation: 0, height: 70 } }}
    >
      <BottomTab.Group
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#212227',
          tabBarItemStyle: {},
        }}
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
              <View>
                <View style={styles.likedPetsCountContainer}>
                  <Text style={styles.likedPetsCount}>{likedPets.length}</Text>
                </View>
                <HeartFilled fill={focused ? undefined : 'gray'} />
              </View>
            ),
          }}
        />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  likedPetsCountContainer: {
    position: 'absolute',
    top: -3,
    right: -6,
    backgroundColor: '#DE0202',
    zIndex: 1,
    height: 16,
    width: 16,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  likedPetsCount: {
    color: 'white',
    fontSize: 12,
  },
});
