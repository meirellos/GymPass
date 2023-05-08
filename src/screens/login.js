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

export default function Login({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.bloco}>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <Text style={styles.titulo}>Seja bem vindo!</Text>
      <Text style={styles.titulo}>Faça seu login ou cadastre-se abaixo.</Text>

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

      <View style={styles.botoesLogin}>
        <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={() => {
            navigation.navigate("Cadastro");
          }}
        >
          <Text style={styles.textoCadastro}>Cadastre-se</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoLogin}
          onPress={() => {
            navigation.navigate("Planos");
          }}
        >
          <Text style={styles.textoCadastro}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
