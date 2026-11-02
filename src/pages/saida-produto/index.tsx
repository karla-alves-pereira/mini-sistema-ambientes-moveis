
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function SaidaProduto() {
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [motivo, setMotivo] = useState('Venda');

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
       name="output"
       size={45}
       color="#2563EB"
       />
      </View>

      <Text style={{ fontWeight: '600', marginBottom: 8 }}>
        Nome do Produto
      </Text>

      <TextInput
        placeholder="Digite o nome do produto"
        value={nome}
        onChangeText={setNome}
        style={{
          backgroundColor: '#FFF',
          borderWidth: 1,
          borderColor: '#DDD',
          borderRadius: 10,
          padding: 14,
          marginBottom: 22,
        }}
      />

      <Text style={{ fontWeight: '600', marginBottom: 8 }}>
        Quantidade de Saída
      </Text>

      <TextInput
        placeholder="Digite a quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={{
          backgroundColor: '#FFF',
          borderWidth: 1,
          borderColor: '#DDD',
          borderRadius: 10,
          padding: 14,
          marginBottom: 22,
        }}
      />

      <Text style={{ fontWeight: '600', marginBottom: 8 }}>
        Motivo da Saída
      </Text>

      <View style={{
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 10,
        marginBottom: 22,
      }}>
        <Picker
          selectedValue={motivo}
          onValueChange={(itemValue) => setMotivo(itemValue)}
        >
          <Picker.Item label="Venda" value="Venda" />
          <Picker.Item label="Avarias" value="Avarias" />
          <Picker.Item label="Uso Interno" value="Uso Interno" />
        </Picker>
      </View>
    </View>
  );
}
