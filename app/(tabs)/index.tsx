import ElectricityPage from '@/components/ElectricityPage';
import { StyleSheet, View } from 'react-native';

export default function ConsumptionScreen() {
  return (
    <View style={styles.container}>
      <ElectricityPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
