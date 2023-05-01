import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PrimeiraTela from './src/pages/tela1';
import SegundaTela from './src/pages/tela2';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PrimeiraTela">
        
        <Stack.Screen
        name="PrimeiraTela"
        component={PrimeiraTela}
        options={{
          title:'Abertura de Conta',
          headerStyle:{
            backgroundColor: 'blue'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />
        
        <Stack.Screen
        name="SegundaTela"
        component={SegundaTela}
        options={{
          title:'Dados Informados',
          headerStyle:{
            backgroundColor: 'green'
          },
          headerTintColor: '#FFF',
          //headerShown: false,
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
