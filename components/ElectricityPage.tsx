import { View, Text, StyleSheet } from 'react-native';
import ElectricityGraph from './ElectricityGraph';
import data from '../assets/data.json';

const ElectricityPage = () => {
  const userConsumption = data.userConsumption;
  const buildingAverage = data.buildingAverage;
  return (
    <View style={styles.container}>
      <ElectricityTitle />
      <ElectricityGraph
        userConsumption={userConsumption}
        buildingAverage={buildingAverage}
      />
      <AverageSection buildingAverage={buildingAverage} />
    </View>
  );
};

export default ElectricityPage;

const ElectricityTitle = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Consumo</Text>
    </View>
  );
};

const AverageSection = ({ buildingAverage }: { buildingAverage: number }) => {
  return (
    <Text style={styles.average}>
      Media edificio diaria: {buildingAverage.toLocaleString('es')} kWh
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    maxWidth: 480,
    alignSelf: 'center',
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: 42,
    fontFamily: 'Inter_300Light',
  },
  average: {
    fontSize: 18,
    fontFamily: 'Inter_400Regular',
    marginTop: 10,
  },
});
