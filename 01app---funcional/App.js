import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.profileTitle}>Meu Perfil</Text>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/66747981?v=4' }}
          style={styles.profileImage}
        />
      </View>

      <Text style={styles.sectionTitle}>Dados pessoais</Text>
      <Text>Vivian da Cunha, 47 anos, Solteira, Fatecana</Text>

      <Text style={styles.sectionTitle}>Formação</Text>
      <Text>FATEC BS - SI</Text>
      <Text>Ciências da Computação</Text>

      <Text style={styles.sectionTitle}>Experiência</Text>
      <Text>Estagiaria</Text>
      <Text>Tecnica de informatica</Text>

      <Text style={styles.sectionTitle}>Projetos</Text>
      <Text>Salesforce</Text>
      <Text>Suporte</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Constants.statusBarHeight,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  profile: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileTitle: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 20,
  },
});
