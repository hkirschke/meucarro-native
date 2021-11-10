import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles/estilos";
import ContratoObj from '../models/contrato.json';

const ImgLogo = "../assets/icon-108x108.png";

//Carrega o cabeçalho da aplicação, carregando informações do arquivo contrato.json
const HeaderIndex = () => {
    return (
        <View style={[styles.headerBarFive]}>
            <View >
                <Text style={[styles.h3, styles.textWhite]}> Olá, {ContratoObj.Contratante}</Text>
            </View> 
            <View>
                <Image style={styles.badge} source={require(ImgLogo)} />
            </View>
        </View>
    );
  };

export default HeaderIndex;