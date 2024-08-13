import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';
import Header from '../shared/Header';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: '#444',
        headerStyle: {
          backgroundColor: '#eee',
        },
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => <Header title="About GameZoon" />,
        }}
      />
    </Stack.Navigator>
  );
}
