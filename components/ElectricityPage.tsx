import { View, Text, StyleSheet } from 'react-native';
import ElectricityGraph from './ElectricityGraph';

const ElectricityPage = () => {
  return (
    <View style={styles.container}>
      <ElectricityTitle />
      <ElectricityGraph />
      <AverageSection />
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

const AverageSection = () => {
  return <Text style={styles.average}>Media edificio diaria: 4,1 kWh</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    maxWidth: 480,
    alignSelf: 'center'
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
