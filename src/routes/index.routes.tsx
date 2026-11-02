
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomRoutes from './bottom.routes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Principal"
        component={BottomRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
