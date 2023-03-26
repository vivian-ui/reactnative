import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [resultado, setResultado] = useState('');
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calcular = () => {
    const res = peso / (altura * altura);
    let texto;
    if (res < 18.5)
      texto = 'Abaixo do peso'
    else if (res < 24.9)
      texto = 'Peso normal'
    else if (res < 29.9)
      texto = 'Sobrepeso'
    else if (res < 34.9)
      texto = 'Obesidade Grau I'
    else if (res < 39.9)
      texto = 'Obesidade Grau II'
    else
      texto = 'Obesidade Grau III ou Mórbida'
    setResultado(texto);
  };

  return (
    <View style={styles.area}>
      <Text style={styles.titulo}>Calculo do IMC</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://img.freepik.com/fotos-gratis/homem-jovem-de-esportes-escondendo-o-rosto-atras-de-balancas_171337-15875.jpg?size=626&ext=jpg',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Peso..."
        onChangeText={(valor) => setPeso(valor)}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura..."
        onChangeText={(valor) => setAltura(valor)}
      />
      <Button title="Verificar" onPress={calcular} />
      <Text style={styles.texto}> {resultado} </Text>
    </View>
  );
};
