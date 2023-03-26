import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: '',
      etanol: 0,
      gasolina: 0,
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    if (this.state.etanol === 0 || this.state.gasolina === 0) {
      alert('Digite os dois preços!');
      return;
    }

    res = this.state.etanol / this.state.gasolina;

    if (res < 0.7) {
      this.setState({ resultado: 'Etanol: ' + res });
    } else {
      this.setState({ resultado: 'Gasolina: ' + res });
    }
  }

  render() {
    return (
      <View style={styles.area}>
        <Text style={styles.titulo}>Alcool ou Gasolina</Text>
        <Image 
          style={styles.image}
          source={{uri: 'https://cdn.pixabay.com/photo/2016/08/15/22/20/fuel-1596622_640.jpg'}}
        />
        <TextInput
          style={styles.input}
          placeholder="Preço do alcool..."
          onChangeText={(valor) => this.setState({ etanol: valor })}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço da gasolina..."
          onChangeText={(valor) => this.setState({ gasolina: valor })}
        />

        <Button title="Calcular" onPress={this.calcular} />

        <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}

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
    alignSelf: 'center' 
  },
});



export default App;
