import { StyleSheet, Text, View, Animated } from 'react-native';
import data from '../assets/data.json';
import { getPercentageComparedToAverage } from '@/utils';
import { useEffect, useMemo, useRef } from 'react';

const ElectricityGraph = () => {
  const userConsumption = data.userConsumption;
  const buildingAverage = data.buildingAverage;
  const internalCircleSize = getPercentageComparedToAverage(
    userConsumption,
    buildingAverage
  );
  const animatedSize = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (internalCircleSize) {
      Animated.timing(animatedSize, {
        toValue: internalCircleSize,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  }, [internalCircleSize]);
  return (
    <View style={styles.container}>
      <View style={styles.circlesContent}>
        <View style={styles.averageCircle} />
        <Animated.View
          style={[
            styles.currentUserValue,
            {
              width: animatedSize.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
              height: animatedSize.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <Text style={styles.currentUserValueText}>
        {userConsumption.toLocaleString('es')} kWh
      </Text>
    </View>
  );
};

export default ElectricityGraph;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circlesContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 343.18,
    height: 343.18,
  },
  averageCircle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ebebeb',
    borderRadius: '50%',
  },
  currentUserValue: {
    backgroundColor: '#88b4ff',
    borderRadius: '50%',
    position: 'absolute',
  },
  currentUserValueText: {
    fontSize: 68,
    fontFamily: 'Inter_300Light',
    position: 'absolute',
  },
});
