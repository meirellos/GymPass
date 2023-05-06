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

export default function Cadastro() {
    return (
        <View>
            <TextInput style={styles.caixaTexto} placeholder="Digite seu Login" placeholderTextColor={'#A9A9A9'}></TextInput>
            <TextInput style={styles.caixaTexto} placeholder="Digite sua senha" placeholderTextColor={'#A9A9A9'}></TextInput>
            <TextInput style={styles.caixaTexto} placeholder="Digite sua senha novamente" placeholderTextColor={'#A9A9A9'}></TextInput>
        </View>
    )
}