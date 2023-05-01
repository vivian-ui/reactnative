import React from 'react';
import { View, Text, Button } from 'react-native';
import {styles} from './styles2.js';

import { useNavigation } from '@react-navigation/native';

export default function SegundaTela({ route }) {

  const navigation = useNavigation();

  const { nome, idade, sexo, escolaridade, limite, brasileiro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dados informados: </Text>
      <Text style={styles.textoResultado}>Nome: {nome}</Text>
      <Text style={styles.textoResultado}>Idade: {idade}</Text>
      <Text style={styles.textoResultado}>Sexo: {sexo}</Text>
      <Text style={styles.textoResultado}>Escolaridade: {escolaridade}</Text>
      <Text style={styles.textoResultado}>Limite: {limite.toFixed(2)}</Text>
      <Text style={styles.textoResultado}>É brasileiro: {(brasileiro) ? "Sim" : "Não"}</Text>

      <Button title='Voltar para Abertura de Conta 'onPress={ () => navigation.goBack() }
      />

    </View>
  );
}

