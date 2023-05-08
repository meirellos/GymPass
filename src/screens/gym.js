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
import fundo from "../../assets/fundo.jpeg";
import habitus from "../../assets/habitus-logo.png";
import redfit from "../../assets/redfit-logo.png";
import garagem from "../../assets/garagemgym-logo.webp";
import vida from "../../assets/vida-logo.jpg";


export default function Gym({navigation}) {
  return (
    <ScrollView>
      <View style={styles.blocoBanner}>
        <Image source={fundo} style={styles.banner}></Image>
      </View>

      <View>
        <Text style={styles.titulo}> Academias disponíveis neste plano:</Text>
      </View>

      <View style={styles.blocoAcademias}>
        <Image source={habitus} style={styles.logos}></Image>
        <Text style={styles.tituloAcademia}>
          Academia Habitus - Bauru{"\n"}
          <Text style={styles.descAcademia}>
            Local: R. Salvador Filardi, 2-50 - Vila Souto
          </Text>
        </Text>
        <TouchableOpacity style={styles.botaoAcademia} onPress={()=>{
          navigation.navigate('ConfirmacaoAcad')
        }}>
          <Text style={styles.textoBotao}>Selecionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blocoAcademias}>
        <Image source={redfit} style={styles.logos}></Image>
        <Text style={styles.tituloAcademia}>
          REDFIT - Bauru{"\n"}
          <Text style={styles.descAcademia}>
            Local: R. Henrique Davi, 15-55 - Vila Nova Cidade U...
          </Text>
        </Text>
        <TouchableOpacity style={styles.botaoAcademia} onPress={()=>{
          navigation.navigate('ConfirmacaoAcad')
        }}>
          <Text style={styles.textoBotao}>Selecionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blocoAcademias}>
        <Image source={garagem} style={styles.logos}></Image>
        <Text style={styles.tituloAcademia}>
          Garagem Gym - Bauru{"\n"}
          <Text style={styles.descAcademia}>
            Local: R. Mario Gonzaga Junqueira, 47 - Quadra 14 -...
          </Text>
        </Text>
        <TouchableOpacity style={styles.botaoAcademia} onPress={()=>{
          navigation.navigate('ConfirmacaoAcad')
        }}>
          <Text style={styles.textoBotao}>Selecionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blocoAcademias}>
        <Image source={vida} style={styles.logos}></Image>
        <Text style={styles.tituloAcademia}>
          Vida Academia{"\n"}
          <Text style={styles.descAcademia}>
            Local: Rua Wenceslau Braz, 2-70 - Vila Souto, Bauru...
          </Text>
        </Text>
        <TouchableOpacity style={styles.botaoAcademia} onPress={()=>{
          navigation.navigate('ConfirmacaoAcad')
        }}>
          <Text style={styles.textoBotao}>Selecionar</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}
