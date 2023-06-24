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

import styles from "./styles.js";

import { TouchableOpacity } from "react-native-web";

import logo from "../../assets/logo.png";
import instru from "../../assets/instrumentos.jpg";

export default function Login({ navigation }) {
  return (
    <ScrollView>
      <Text style={styles.titulo}>BT Instrumentos</Text>

      <View style={styles.bloco}>
        <Image source={instru} style={styles.logo}></Image>
      </View>
      <Text style={styles.titulo2}>Faça o login ou crie sua conta agora mesmo!</Text>

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


      <TouchableOpacity
          style={styles.botaoLogin}
          onPress={() => {
            navigation.navigate("Planos");
          }}
        >
          <Text style={styles.textoCadastro2}>Logar</Text>
        </TouchableOpacity>
      <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => {
            navigation.navigate("Cadastro");
          }}
        >
          <Text style={styles.textoCadastro}>Cadastre-se</Text>
        </TouchableOpacity>
    </ScrollView>
  );
}
