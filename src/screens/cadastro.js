import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import styles from './styles.js';

import { TouchableOpacity } from "react-native-web";

export default function Cadastro({navigation}) {
    return (
        <View style={styles.modalCadastro}>
            <Text style={styles.titulo}>Efetue seu cadastro em nosso sistema!</Text>
            <TextInput style={styles.input} placeholder="Digite seu Login" placeholderTextColor={'#A9A9A9'}></TextInput>
            <TextInput style={styles.input} placeholder="Digite sua senha" placeholderTextColor={'#A9A9A9'}></TextInput>
            <TextInput style={styles.input} placeholder="Digite sua senha novamente" placeholderTextColor={'#A9A9A9'}></TextInput>
        
        <View style={styles.botoesLogin}>
        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.textoCadastro}>Cadastrar</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}