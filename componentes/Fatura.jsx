import ContratoObj from '../models/contrato.json'; 
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/estilos";
import React from 'react';
 
var statusFatura = "Em Aberto";
var valorFatura = 0;

//Renderiza cada fatura passada como propriedade através do componente faturas.
const Fatura = (item) => {
    // console.log("CARREGOU FATURA",fatura);
    CarregaModelMockFatura(item.fatura);
    return ( 
        statusFatura != "Em Atraso" ? (
            <View style={cssFatura.StatusFaturaOk}>
                <View style={[cssFatura.StatusFaturaOk]}> 
                    <Text style={[styles.textDark, styles.h3]}>{"Valor Fatura: " + valorFatura}</Text>
                    <Text style={[styles.textDark, styles.h3]}>{"Mês Faturamento: " + item.fatura.MesReferencia}</Text>
                    <Text style={[styles.textDark, styles.h3]}>{"Status Fatura: " + statusFatura}</Text>
                </View> 
            </View>
            ) : (
            <View style={cssFatura.StatusFaturaAtraso}>
                <View style={[cssFatura.StatusFaturaAtraso]}> 
                    <Text style={[styles.textWhite, styles.h3]}>{"Valor Fatura: " + valorFatura}</Text>
                    <Text style={[styles.textWhite, styles.h3]}>{"Mês Faturamento: " + item.fatura.MesReferencia}</Text>
                    <Text style={[styles.textWhite, styles.h3]}>{"Status Fatura: " + statusFatura}</Text>
                </View>
            </View>
        )
    )
  };

//Carrega informações da fatura e realizando o calculo caso esteja vencida
//Define qual classe CSS será aplicada para o card de fatura
//fonte dos dados: /fatura.json
function CarregaModelMockFatura(fatura){
    // console.log("fatura.fatura.Valor sadasd",fatura.fatura.Valor);
    let porcJuros = ContratoObj.JurosVencimento;  
    valorFatura = fatura.Valor;  
    
    if(fatura.Status === 1 ){
        statusFatura = "Paga";
    };
    
    if(fatura.Status === 2) {
        statusFatura = "Em Atraso";
        let valorDoJuros = valorFatura * (porcJuros/100);
        let valorComJuros = valorDoJuros + valorFatura;
        valorFatura = valorComJuros; 
     };
     
};

const cssFatura = StyleSheet.create({
     StatusFaturaAtraso: {
        backgroundColor: "red"
    },
    StatusFaturaOk: {
        backgroundColor: "ghostwhite"
    },
});

export default Fatura;