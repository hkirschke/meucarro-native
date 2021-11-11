import ContratoObj from '../models/contrato.json'; 
import { Text, StyleSheet, View } from "react-native";
import styles from "../styles/estilos";
import React from 'react';
 
// var cssStatusFatura = "bg-light text-dark"; 
var statusFatura = "Em Aberto";
var valorFatura = 0;

//Renderiza cada fatura passada como propriedade através do componente faturas.
const Fatura = (props) => {
    // console.log("CARREGOU FATURA",props.fatura);
    CarregaModelMockFatura(props.fatura);
    return ( 
        statusFatura != "Paga" ? (
        <View >
            <View style={styles.componentContent,cssFatura.StatusFaturaOk}>
                <View style={[cssFatura.StatusFaturaOk]}> 
                    <Text style={[styles.textDark, styles.h3]}>{"Valor Fatura: " + valorFatura}</Text>
                    <Text style={[styles.textDark, styles.h3]}>{"Mês Faturamento: " + props.fatura.MesReferencia}</Text>
                    <Text style={[styles.textDark, styles.h3]}>{"Status Fatura: " + statusFatura}</Text>
                </View> 
            </View>
        </View>    
            ) : (
        <View >
            <View style={styles.componentContent,cssFatura.StatusFaturaAtraso}>
                <View style={[cssFatura.StatusFaturaAtraso]}> 
                    <Text style={[styles.textWhite, styles.h3]}>{"Valor Fatura: " + valorFatura}</Text>
                    <Text style={[styles.textWhite, styles.h3]}>{"Mês Faturamento: " + props.fatura.MesReferencia}</Text>
                    <Text style={[styles.textWhite, styles.h3]}>{"Status Fatura: " + statusFatura}</Text>
                </View>
            </View>  
        </View>
        )
    )
  };

//Carrega informações da fatura e realizando o calculo caso esteja vencida
//Define qual classe CSS será aplicada para o card de fatura
//fonte dos dados: /fatura.json
function CarregaModelMockFatura(fatura){ 
    let porcJuros = ContratoObj.JurosVencimento;  
    valorFatura = fatura.Valor;  
    
    if(fatura.Status === 1 ){
        statusFatura = "Paga";
    };
    
    if(fatura.Status === 2) {
        statusFatura = "Em atraso";
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