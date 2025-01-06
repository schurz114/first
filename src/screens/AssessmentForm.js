import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AssessmentForm() {
  return (
    <View style={styles.container}>
      <Text>海外求职评估表单</Text>
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