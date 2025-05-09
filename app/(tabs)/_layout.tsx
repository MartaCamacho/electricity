import React from 'react';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Consumo',
          tabBarIcon: () => (
            <AntDesign name="barschart" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
