import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load RNGestureHandlerModule. This may lead to deadlocks']);

const App = () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}

export default App;