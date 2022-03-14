import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteScreen from '../screens/Favorite';
import PokedexScreen from '../screens/Pokedex';
import Account from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Icon name='heart' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Pokedex'
        component={PokedexScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => renderPokeball(),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarLabel: 'Cuenta',
          tabBarIcon: ({ color, size }) => (
            <Icon name='user' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -15 }}
    />
  );
}
