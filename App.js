// Import from react native
import React from 'react';

import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// Import from owner project
import Navigator from './navigation/Navigator';
import TabNavigator from './navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
};

