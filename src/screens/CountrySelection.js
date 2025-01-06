import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function CountrySelection({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>选择目标国家</Text>
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('AssessmentForm')}
      >
        下一步
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 