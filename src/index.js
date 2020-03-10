import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { navigationRef } from './RootNavigation';
import ActionBar from './components/ActionBar';
import Main from './pages/Main';
import Cart from './pages/Cart';

import store from './store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle="light-content" backgroundColor="#141419" />
        <ActionBar />
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
