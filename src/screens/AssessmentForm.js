import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const AssessmentForm = ({ route }) => {
  const { targetCountry, autoRecommend } = route.params || {};
  
  const [formData, setFormData] = useState({
    education: '',
    yearsOfExperience: '',
    englishLevel: '',
    skills: '',
    targetCountry: targetCountry || '',
  });

  const handleSubmit = () => {
    // 计算评分逻辑将在这里实现
    calculateScore(formData);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>海外求职评估</Text>
      
      <TextInput
        label="最高学历"
        value={formData.education}
        onChangeText={(text) => setFormData({...formData, education: text})}
        style={styles.input}
      />

      <TextInput
        label="工作年限"
        value={formData.yearsOfExperience}
        keyboardType="numeric"
        onChangeText={(text) => setFormData({...formData, yearsOfExperience: text})}
        style={styles.input}
      />

      <TextInput
        label="英语水平"
        value={formData.englishLevel}
        onChangeText={(text) => setFormData({...formData, englishLevel: text})}
        style={styles.input}
      />

      <TextInput
        label="专业技能"
        value={formData.skills}
        multiline
        onChangeText={(text) => setFormData({...formData, skills: text})}
        style={styles.input}
      />

      {autoRecommend ? null : (
        <TextInput
          label="目标国家"
          value={formData.targetCountry}
          onChangeText={(text) => setFormData({...formData, targetCountry: text})}
          style={styles.input}
          disabled={!!targetCountry}
        />
      )}

      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        {autoRecommend ? '开始智能评估' : '开始评估'}
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
  },
});

export default AssessmentForm; 