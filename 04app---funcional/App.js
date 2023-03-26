import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [resultado, setResultado] = useState('');
  const [etanol, setEtanol] = useState(0);
  const [gasolina, setGasolina] = useState(0);

  const calcular = () => {
    if (etanol === 0 || gasolina === 0) {
      alert('Digite os dois preços!');
      return;
    }

    const res = etanol / gasolina;

    if (res < 0.7) {
      setResultado('Etanol: ' + res);
    } else {
      setResultado('Gasolina: ' + res);
    }
  };

  return (
    <View style={styles.area}>
      <Text style={styles.titulo}>Alcool ou Gasolina</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/08/15/22/20/fuel-1596622_640.jpg',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço do alcool..."
        onChangeText={(valor) => setEtanol(valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da gasolina..."
        onChangeText={(valor) => setGasolina(valor)}
      />

      <Button title="Calcular" onPress={calcular} />

      <Text style={styles.texto}> {resultado} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
  titulo: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 15,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 10,
    alignSelf: 'center',
  },
});
