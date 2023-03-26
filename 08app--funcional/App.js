import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Anuncios</Text>
      <ScrollView horizontal={true}>
        <View style={styles.box1}>
          <Image style={styles.image}
            source={{uri: 'https://cdn.pixabay.com/photo/2012/04/26/18/44/watch-42803_960_720.png'}}
          />
          <Text style={styles.titulo}>Relógio</Text>
        </View>
        <View style={styles.box2}>
          <Image style={styles.image}
            source={{uri: 'https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_960_720.jpg'}}
          />
          <Text style={styles.titulo}>Tênis</Text>
        </View>
        <View style={styles.box3}>
          <Image style={styles.image}
            source={{uri: 'https://cdn.pixabay.com/photo/2016/05/16/21/07/football-1396740_960_720.jpg'}}
          />
          <Text style={styles.titulo}>Bola</Text>
        </View>
        <View style={styles.box4}>
          <Image style={styles.image}
            source={{uri: 'https://cdn.pixabay.com/photo/2014/01/21/19/33/umbrella-249346_960_720.png'}}
          />
          <Text style={styles.titulo}>Guarda chuva</Text>
        </View>
      </ScrollView>
    </View>
  );
};
