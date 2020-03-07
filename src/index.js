import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import ActionBar from './components/ActionBar';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <ActionBar />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
