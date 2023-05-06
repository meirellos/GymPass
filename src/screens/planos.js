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

import "intl";
import "intl/locale-data/jsonp/pt-BR";

import fundo from "../../assets/fundo.jpeg";

import styles from './styles.js';

export default function Planos(){
    return(
      <ScrollView>
      <View style={styles.blocoBanner}>
        <Image source={fundo} style={styles.banner}></Image>
      </View>

      <View>
        <Text style={styles.titulo}> Lista de Planos </Text>
      </View>

      <View style={styles.blocoPlanos}>
        <Text style={styles.tituloAcademia}>Plano Starter</Text>
        <Text style={styles.precoItem}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(29,90)}/mês
        </Text>
       
        <TouchableOpacity style={styles.botaoSelecionar} onPress={()=>{
          navigation.navigate()
        }}>
          <Text style={styles.textoBotaoPlano}>Selecionar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.blocoPlanos}>
        <Text style={styles.tituloAcademia}>Plano Basic</Text>
        <Text style={styles.precoItem}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(49,90)}/mês
        </Text>
      </View>

      <View style={styles.blocoPlanos}>
        <Text style={styles.tituloAcademia}>Plano Basic+</Text>
        <Text style={styles.precoItem}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(79,90)}/mês
        </Text>
      </View>

      </ScrollView>
    )
}