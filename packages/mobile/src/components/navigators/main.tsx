import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import * as screens from 'screens';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export const NavigationStack: React.FunctionComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={screens.Search} />
      <Stack.Screen name="Settings" component={screens.Artist} />
    </Stack.Navigator>
  );
};

export const NavigationTabs: React.FunctionComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={screens.Home} />
      <Tab.Screen name="NavigationStack" component={NavigationStack} />
    </Tab.Navigator>
  );
};
