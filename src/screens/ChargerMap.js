import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, FAB, Card, Chip, Snackbar } from 'react-native-paper';
import { colors } from '../theme/colors';

const mockChargers = [
  {
    id: 1,
    name: 'Berlin Hauptbahnhof',
    address: 'Europaplatz 1, 10557 Berlin',
    status: 'available',
    type: 'CCS',
    power: '150kW',
    price: '0.49€/kWh'
  },
  {
    id: 2,
    name: 'EUREF-Campus',
    address: 'EUREF-Campus 1-25, 10829 Berlin',
    status: 'occupied',
    type: 'Type 2',
    power: '22kW',
    price: '0.39€/kWh'
  }
];

export default function ChargerMap() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // 3秒后自动隐藏欢迎消息
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mapPlaceholder}>
        <Text>地图将在这里显示</Text>
      </View>
      
      <View style={styles.chargerList}>
        {mockChargers.map(charger => (
          <Card key={charger.id} style={styles.chargerCard}>
            <Card.Content>
              <Text style={styles.chargerName}>{charger.name}</Text>
              <Text style={styles.address}>{charger.address}</Text>
              
              <View style={styles.chipContainer}>
                <Chip 
                  style={[
                    styles.statusChip,
                    { backgroundColor: colors[charger.status] }
                  ]}
                  textStyle={{ color: colors.text.white }}
                >
                  {charger.status === 'available' ? '可用' : '占用中'}
                </Chip>
                <Chip style={styles.chip}>{charger.type}</Chip>
                <Chip style={styles.chip}>{charger.power}</Chip>
                <Chip style={styles.chip}>{charger.price}</Chip>
              </View>
            </Card.Content>
          </Card>
        ))}
      </View>

      <FAB
        icon="crosshairs-gps"
        style={styles.fab}
        onPress={() => {}}
        label="定位"
      />

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={3000}
        style={styles.snackbar}
      >
        你好
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chargerList: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: '40%',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  chargerCard: {
    marginBottom: 8,
    elevation: 4,
  },
  chargerName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  statusChip: {
    marginRight: 8,
  },
  chip: {
    backgroundColor: colors.background,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: '42%',
    backgroundColor: colors.primary,
  },
  snackbar: {
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: '45%',
  },
}); 