
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

export default function NovoProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');

  function cadastrarProduto() {
    if (!nome || !preco || !quantidade) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="inventory" size={42} style={styles.headerIcon} />
        <Text style={styles.title}>Novo Produto</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <MaterialIcons name="sell" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nome do Produto"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="attach-money" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Preço de Venda"
            value={preco}
            onChangeText={setPreco}
            keyboardType="decimal-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="inventory-2" size={24} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Quantidade de entrada"
            value={quantidade}
            onChangeText={setQuantidade}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={cadastrarProduto}
        >
          <Text style={styles.buttonText}>Cadastrar Produto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

