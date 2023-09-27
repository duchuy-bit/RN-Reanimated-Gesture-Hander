import { View, Text,TextInput } from 'react-native'
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import HomeScreen from './src/screens/HomeScreen';
import BallScreen from './src/screens/BallScreen';
import BoxDecay from './src/screens/BoxDecay';

const Stack = createSharedElementStackNavigator();
enableScreens();
const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
      
    },
  };

export default function App() {
    // Text.defaultProps.style = {color: 'white'};
    // TextInput.defaultProps.style = {color: 'blue'}
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
        <MainNavigation/>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

function MainNavigation (){

    return(
        <Stack.Navigator initialRouteName='HomeScreen'>

            <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>

            <Stack.Screen name="BallScreen" component={BallScreen}  options={{headerShown: false}}/>

            <Stack.Screen name="BoxDecay" component={BoxDecay}  options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}