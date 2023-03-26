import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { styles } from './styles';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>VAGAS</Text>
        <ScrollView>
          <View style={styles.box1}>
             <Text style={styles.texto}>Desenvolviomento Back-End</Text>
             <Text style={styles.descricao}>Salário: R$ 5.000,00</Text>
             <Text style={styles.descricao}>Drescrição: XXX xxxx XXXX xx XXX xxxx XXXX xx XXX xxxx XXXX xxXXX xxxx XXXX xx</Text>
             <Text style={styles.descricao}>Contato: (00) 00000-0000)</Text>
          </View>
          <View style={styles.box2}>
             <Text style={styles.texto}>Engenheiro de Dados</Text>
             <Text style={styles.descricao}>Salário: R$ 15.000,00</Text>
             <Text style={styles.descricao}>Drescrição: XXX xxxx XXXX xx XXX xxxx XXXX xx XXX xxxx XXXX xxXXX xxxx XXXX xx</Text>
             <Text style={styles.descricao}>Contato: (00) 00000-0000)</Text>          </View>
          <View style={styles.box3}>
            <Text style={styles.texto}>Analista de Sistemas</Text>
             <Text style={styles.descricao}>Salário: R$ 20.000,00</Text>
             <Text style={styles.descricao}>Drescrição: XXX xxxx XXXX xx XXX xxxx XXXX xx XXX xxxx XXXX xxXXX xxxx XXXX xx</Text>
             <Text style={styles.descricao}>Contato: (00) 00000-0000)</Text>
          </View>
          <View style={styles.box4}>
            <Text style={styles.texto}>Arquiteto</Text>
             <Text style={styles.descricao}>Salário: R$ 25.000,00</Text>
             <Text style={styles.descricao}>Drescrição: XXX xxxx XXXX xx XXX xxxx XXXX xx XXX xxxx XXXX xxXXX xxxx XXXX xx</Text>
             <Text style={styles.descricao}>Contato: (00) 00000-0000)</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}



export default App;