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

const CountrySelection = ({ navigation }) => {
  const handleCountrySelect = (country) => {
    navigation.navigate('AssessmentForm', { targetCountry: country });
  };

  const handleAutoRecommend = () => {
    navigation.navigate('AssessmentForm', { autoRecommend: true });
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={styles.title}>选择目标国家</Text>
      <Text style={styles.subtitle}>开启你的海外职业之旅</Text>

      {popularCountries.map((country) => (
        <Card 
          key={country.id} 
          style={styles.card}
          onPress={() => handleCountrySelect(country.name)}
        >
          <LinearGradient
            colors={['rgba(79, 70, 229, 0.02)', 'rgba(79, 70, 229, 0.08)']}
            style={styles.cardGradient}
          >
            <Card.Content>
              <Text style={styles.countryName}>{country.name}</Text>
              <Text style={styles.description}>{country.description}</Text>
              <View style={styles.difficultyContainer}>
                <Text style={[
                  styles.difficulty,
                  { color: country.difficulty === '难度较高' ? colors.warning : colors.success }
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
        contentStyle={styles.buttonContent}
        color={colors.primary}
      >
        让系统为我推荐最适合的国家
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: colors.text.secondary,
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
    color: colors.text.primary,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.text.secondary,
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
    marginTop: 16,
    marginBottom: 32,
    borderRadius: 8,
    elevation: 4,
  },
  buttonContent: {
    height: 48,
  },
});

export default CountrySelection; 