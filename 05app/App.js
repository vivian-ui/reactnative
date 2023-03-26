import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      peso: 0,
      altura: 0,
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
   res = this.state.peso / (this.state.altura * this.state.altura)
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
      texto = 'Obesidade Grau III ou MÃ³rbida'
    this.setState({
      resultado: texto
    });

  }

  render() {
    return (
      <View style={styles.area}>

        <Text style={styles.titulo}>Calculo do IMC</Text>
        <Image 
          style={styles.image}
          source={{uri: 'https://img.freepik.com/fotos-gratis/homem-jovem-de-esportes-escondendo-o-rosto-atras-de-balancas_171337-15875.jpg?size=626&ext=jpg'}}
        />

        <TextInput
          style={styles.input}
          placeholder="Peso..."
          onChangeText={(valor) => this.setState({ peso: valor })}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura..."
          onChangeText={(valor) => this.setState({ altura: valor })}
        />

        <Button title="Verificar" onPress={this.calcular} />

        <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}





export default App;
