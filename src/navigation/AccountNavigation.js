import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/Account';

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccountScreen'
        component={AccountScreen}
        options={{ title: 'Mi cuenta' }}
      />
    </Stack.Navigator>
  );
}
