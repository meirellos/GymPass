import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";

import { TouchableOpacity } from "react-native-web";

import styles from './styles.js';

export default function ConfirmaAcad() {
    return(
        <Text style={styles.confirmaAcadText}> Academia selecionada com sucesso! </Text>
    )
}