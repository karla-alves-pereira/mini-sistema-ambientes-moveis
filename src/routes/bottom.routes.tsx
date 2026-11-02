
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import NovoProduto from '../pages/novo-produto';
import SaidaProduto from '../pages/saida-produto';
import ControleEstoque from '../pages/controle-estoque';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#888888',
      }}
    >
      <Tab.Screen
        name="Novo Produto"
        component={NovoProduto}
        options={{
          title: 'Novo Produto',
          tabBarLabel: 'Novo Produto',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inventory" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Saída"
        component={SaidaProduto}
        options={{
          title: 'Saída de Produto',
          tabBarLabel: 'Saída',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="output" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Controle de Estoque"
        component={ControleEstoque}
        options={{
          title: 'Controle de Estoque',
          tabBarLabel: 'Estoque',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inventory-2" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
