import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 0
    };

    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }
  
  incrementar(){
    this.setState({
      contador: this.state.contador + 1
    });
  }

  decrementar(){
    if (this.state.contador > 0){
      this.setState({
        contador: this.state.contador - 1
      });
    }
  }


  render(){
    return(
      <View style={{ marginTop: 20 }}>

        <Text style={{alignSelf: 'center', fontSize: 16, color: 'orange', fontWeight: 'bold'}}>Contador de Pessoas</Text>

        <Text style={{fontSize: 72, color: 'red', textAlign: 'center'}}>
          {this.state.contador}
        </Text>

        <View style={{marginTop: 20}}>
          <Button title="+" onPress={this.incrementar} />
        </View>

        <View style={{marginTop: 20}}>
          <Button title="-" onPress={this.decrementar} />
        </View>
      </View>
    )
  }
}


export default App;