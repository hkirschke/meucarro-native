import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles/estilos";
import ContratoObj from '../models/contrato.json';
import HeaderObj from '../models/headerIndex.js';
 

//Carrega o cabeçalho da aplicação, carregando informações do arquivo contrato.json
const HeaderIndex = () => {
    return (
        <View style={[styles.headerBarFive]}>
            <View >
                <Text style={[styles.h3, styles.textWhite]}> Olá, {ContratoObj.Contratante}</Text>
            </View> 
            <View>
                <Image style={styles.badge} source={HeaderObj.Imglogo} />
            </View>
        </View>
    );
  };

export default HeaderIndex;