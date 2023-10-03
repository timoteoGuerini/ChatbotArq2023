import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {reactNavigationTheme} from '../ui/styles/theme';
import Home from '../ui/screens/Home';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer theme={reactNavigationTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'ChatbotArq2023',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
