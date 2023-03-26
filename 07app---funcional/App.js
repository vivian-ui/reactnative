import React, { useState } from 'react';
import { TextInput, Picker, Switch } from 'react-native';
import { View, Text } from 'react-native-web';
import Slider from '@react-native-community/slider';
import { styles } from './styles';

export default function App() {
const [nome, setNome] = useState('');
const [idade, setIdade] = useState(0);
const [sexo, setSexo] = useState('Selecione');
const [escolaridade, setEscolaridade] = useState('Selecione');
const [limite, setLimite] = useState(0);
const [brasileiro, setBrasileiro] = useState(false);

return(
<View>
<Text style={styles.titulo}>Abertura de conta</Text>
<View style={styles.form}>
<Text style={styles.texto}>Nome: </Text>
<TextInput
style={styles.input}
onPress={(n) => setNome(n)}
/>
</View>
  <View style={styles.form}>
    <Text style={styles.texto}>Idade: </Text>
    <TextInput
      style={styles.input}
      onPress={(i) => setIdade(i)}
    />
  </View>

  <View style={styles.form}>
    <Text style={styles.texto}>Sexo: </Text>
    <Picker
      style={styles.selecao}
      selectedValue={sexo}
      onValueChange={(itemValue) => setSexo(itemValue)}
    >
      <Picker.Item value={''} label='Selecione'/>
      <Picker.Item value={"Masculino"} label="Masculino"/>
      <Picker.Item value={"Feminino"} label="Feminino"/>
    </Picker>
  </View>

  <View style={styles.form}>
    <Text style={styles.texto}>Escolaridade: </Text>
    <Picker
      style={styles.selecao}
      selectedValue={escolaridade}
      onValueChange={(itemValue) => setEscolaridade(itemValue)}
    >
      <Picker.Item value={''} label='Selecione'/>
      <Picker.Item value={"Ensino Fundamental Incompleto"} label="Ensino Fundamental Incompleto"/>
      <Picker.Item value={"Ensino Fundamental Completo"} label="Ensino Fundamental Completo"/>
      <Picker.Item value={"Ensino Médio Incompleto"} label="Ensino Médio Incompleto"/>
      <Picker.Item value={"Ensino Médio Completo"} label="Ensino Médio Completo"/>
      <Picker.Item value={"Ensino Superior Incompleto"} label="Ensino Médio Incompleto"/>
      <Picker.Item value={"Ensino Superior Completo"} label="Ensino Médio Completo"/>
    </Picker>
  </View>

  <View style={styles.form}>
    <Text style={styles.texto}>Limite: </Text>
    <Slider
      minimumValue={0}
      maximumValue={100}
      onValueChange={(value) => setLimite(value)}
    />
  </View>

  <View>
    <Text style={styles.texto}>Brasileiro: </Text>
    <Switch 
      value={brasileiro}
      onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch)}
    />
    <Text style={{fontSize:30}}>
      {(brasileiro) ? "Sim" : "Não"}
    </Text>
  </View>
</View>
)
}
