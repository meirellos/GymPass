import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import styles from './styles.js';

export default function Confirmacao() {
    return(
      <View style={styles.confirmaAcadText}>
        <Text style={styles.confirmaText}> Academia selecionada com sucesso.{'\n'}
        Tenha um bom treino!
        </Text>

        </View>
    )
}