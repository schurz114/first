import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import CountrySelection from './src/screens/CountrySelection';
import AssessmentForm from './src/screens/AssessmentForm';
import { colors } from './src/theme/colors';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="CountrySelection"
          screenOptions={{
            headerBackground: () => (
              <LinearGradient
                colors={[colors.gradient.start, colors.gradient.end]}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '600',
            },
            cardStyle: { backgroundColor: colors.background }
          }}
        >
          <Stack.Screen 
            name="CountrySelection" 
            component={CountrySelection}
            options={{
              title: '选择目标国家',
            }}
          />
          <Stack.Screen 
            name="AssessmentForm" 
            component={AssessmentForm}
            options={{
              title: '海外求职评估',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App; 