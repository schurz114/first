import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';
import ChargerMap from '../screens/ChargerMap';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackground: () => (
            <LinearGradient
              colors={[colors.gradient.start, colors.gradient.end]}
              style={{ flex: 1 }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            />
          ),
          headerTintColor: colors.text.white,
          headerTitleStyle: {
            fontWeight: '600',
          },
          cardStyle: { backgroundColor: colors.background }
        }}
      >
        <Stack.Screen 
          name="ChargerMap" 
          component={ChargerMap}
          options={{
            title: '充电桩查找',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 