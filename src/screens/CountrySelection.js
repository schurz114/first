import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/colors';

const popularCountries = [
  {
    id: 1,
    name: '美国',
    description: '技术创新中心，工资水平高，适合IT、金融等领域人才',
    difficulty: '难度较高'
  },
  {
    id: 2,
    name: '加拿大',
    description: '移民政策友好，生活质量高，适合各类技术人才',
    difficulty: '难度中等'
  },
  {
    id: 3,
    name: '澳大利亚',
    description: '工作生活平衡，适合教育、医疗、建筑等领域人才',
    difficulty: '难度中等'
  },
  {
    id: 4,
    name: '新加坡',
    description: '亚洲金融中心，华人环境，适合金融、IT等领域人才',
    difficulty: '难度较高'
  },
];

export default function CountrySelection({ navigation }) {
  const handleCountrySelect = (country) => {
    navigation.navigate('AssessmentForm', { targetCountry: country });
  };

  const handleAutoRecommend = () => {
    navigation.navigate('AssessmentForm', { autoRecommend: true });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>选择目标国家</Text>
      <Text style={styles.subtitle}>开启你的海外职业之旅</Text>

      {popularCountries.map((country) => (
        <Card 
          key={country.id} 
          style={styles.card}
          onPress={() => handleCountrySelect(country.name)}
        >
          <LinearGradient
            colors={['rgba(76, 102, 159, 0.05)', 'rgba(59, 89, 152, 0.1)']}
            style={styles.cardGradient}
          >
            <Card.Content>
              <Text style={styles.countryName}>{country.name}</Text>
              <Text style={styles.description}>{country.description}</Text>
              <View style={styles.difficultyContainer}>
                <Text style={[
                  styles.difficulty,
                  { color: country.difficulty === '难度较高' ? '#FFA500' : '#4CAF50' }
                ]}>
                  {country.difficulty}
                </Text>
              </View>
            </Card.Content>
          </LinearGradient>
        </Card>
      ))}

      <Button 
        mode="contained" 
        onPress={handleAutoRecommend}
        style={styles.autoButton}
      >
        让系统为我推荐最适合的国家
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    opacity: 0.7,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
    overflow: 'hidden',
  },
  cardGradient: {
    padding: 16,
  },
  countryName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.7,
    marginBottom: 12,
  },
  difficultyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  difficulty: {
    fontSize: 14,
    fontWeight: '500',
  },
  autoButton: {
    marginTop: 8,
    marginBottom: 24,
    borderRadius: 8,
    paddingVertical: 8,
  },
}); 