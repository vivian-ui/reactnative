import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 16,
          color: 'orange',
          fontWeight: 'bold',
        }}>
        Contador de Pessoas
      </Text>

      <Text style={{ fontSize: 72, color: 'red', textAlign: 'center' }}>
        {contador}
      </Text>

      <View style={{ marginTop: 20 }}>
        <Button title="+" onPress={incrementar} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="-" onPress={decrementar} />
      </View>
    </View>
  );
}
