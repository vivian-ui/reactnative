import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '?'
    };

    this.descobrir = this.descobrir.bind(this);
  }
 
  descobrir(){
    this.setState({
      resultado: Math.floor(Math.random() * 10)
    });
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>Jogo do N° Aleatório</Text>
 
      <Image
        source={{uri: 'https://cdn.pixabay.com/photo/2019/02/22/19/03/numbers-4014181_960_720.jpg'}}
        style={{width: 250, height: 210, alignSelf: 'center', marginTop: 20}}
      />

      <Text style={styles.texto}> {this.state.resultado} </Text>

      <Button title="Descobrir" onPress={this.descobrir} />
 
      </View>
    );
  }
}
 
export default App;