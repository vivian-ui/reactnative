import * as React from 'react';
import { Text, View, Image } from 'react-native';
import Constants from 'expo-constants';

function App(){
  return(
    <View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20, color: 'blue'}}>Meu Perfil</Text>

        <Image 
          source={{uri: 'https://avatars.githubusercontent.com/u/66747981?v=4'}}
          style={{width: 150, height: 150, marginTop: 10}}
        />
      </View>

      <Text style={{fontWeight: 'bold', marginTop: 20}}>Dados pessoais</Text>
      <Text>Vivian da Cunha, 47 anos, Solteira, Fatecana</Text>

      <Text style={{fontWeight: 'bold', marginTop: 10}}>Formação</Text>
      <Text>FATEC BS - SI</Text>
      <Text>Ciências da Computação</Text>

      <Text style={{fontWeight: 'bold', marginTop: 10}}>Experiência</Text>
      <Text>Estagiaria</Text>
      <Text>Tecnica de informatica</Text>

      <Text style={{fontWeight: 'bold', marginTop: 10}}>Projetos</Text>
      <Text>Salesforce</Text>
      <Text>Suporte</Text>
    </View>
  )
}

export default App