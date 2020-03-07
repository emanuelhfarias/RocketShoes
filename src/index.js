import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';

import ActionBar from './components/ActionBar';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <ActionBar />
      <Routes />
    </>
  );
}
