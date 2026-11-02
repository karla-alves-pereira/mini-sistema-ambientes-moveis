
import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ControleEstoque() {
  const nomeProduto = 'Produto Exemplo';
  const quantidadeAtual = 5;
  const estoqueBaixo = quantidadeAtual <= 5;

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#F5F6FA',
      padding: 25,
    }}>
            <View style={{
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 35,
      }}>
        <MaterialIcons
          name="inventory-2"
          size={45}
          color="#2563EB"
        />
      </View>

      <View style={{
        backgroundColor: '#FFF',
        padding: 22,
        borderRadius: 12,
        marginBottom: 20,
      }}>
        <Text style={{
          fontSize: 14,
          color: '#777',
          marginBottom: 8,
        }}>
          Nome do Produto
        </Text>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#222',
        }}>
          {nomeProduto}
        </Text>
      </View>

      <View style={{
        backgroundColor: '#FFF',
        padding: 22,
        borderRadius: 12,
        marginBottom: 20,
      }}>
        <Text style={{
          fontSize: 14,
          color: '#777',
          marginBottom: 8,
        }}>
          Quantidade Atual
        </Text>

        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#222',
        }}>
          {quantidadeAtual} unidades
        </Text>
      </View>

      <View style={{
        backgroundColor: '#FFF',
        padding: 22,
        borderRadius: 12,
        alignItems: 'center',
      }}>
        <MaterialIcons
          name={estoqueBaixo ? 'warning' : 'check-circle'}
          size={35}
          color={estoqueBaixo ? '#E69500' : '#228B22'}
        />

        <Text style={{
          fontSize: 14,
          color: '#777',
          marginTop: 10,
        }}>
          Status do Estoque
        </Text>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: estoqueBaixo ? '#E69500' : '#228B22',
          marginTop: 5,
        }}>
          {estoqueBaixo ? 'Estoque Baixo' : 'Em Estoque'}
        </Text>
      </View>
    </View>
  );
}
