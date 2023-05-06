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

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

export default function Login() {
  return (
    <ScrollView>
      <View style={styles.bloco}>
        <Image source={logo} style={styles.logo}></Image>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite seu Login"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        placeholderTextColor={"#A9A9A9"}
        secureTextEntry={true}
      ></TextInput>

      <TouchableOpacity style={styles.botaoCadastro} onPress={() => {
        navigation.navigate('cadastro');
      }}>
        <Text style={styles.textoCadastro}>Cadastre-se</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
