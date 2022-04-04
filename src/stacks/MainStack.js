import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Missas from '../screens/Missas';
import Confissoes from '../screens/Confissoes';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Missas" component={Missas} />
    <Stack.Screen name="Confissoes" component={Confissoes} />
  </Stack.Navigator>
);