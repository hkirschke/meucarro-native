import { Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/estilos";
import CarroObj from '../models/meucarro.js';

const MeuCarro = () => {
    return (
        <View style={styles.component}>
            <View style={styles.componentHeader}>
                <Text style={[styles.h1,styles.componentTitle]}>Meu Carro</Text> 
            </View>
            <Image  style={styles.imgCenter}  source={CarroObj.ImagemCarro} />
            <View style={styles.componentContent}>
                <View style={[styles.divRadius, styles.bgLight]}>
                    <Text style={[styles.textDark, styles.h3]}>{"Marca: " + CarroObj.Marca}</Text>
                    <Text style={[styles.textDark, styles.h3]}>{"Modelo: " + CarroObj.Modelo}</Text>
                    <Text style={[styles.textDark, styles.h3]}>{"Ano: " + CarroObj.Ano}</Text>
                    <Text style={[styles.divRadiusBot, styles.textDark, styles.h4, styles.bgLight, styles.cardFooter]}>{"Condutor Principal: " + CarroObj.CondutorPrincipal}</Text>
                </View> 
            </View>
        </View>
    );
  };
 

export default MeuCarro;