import ContratoObj from '../models/contrato.json'; 
import { Text, View } from "react-native";
import styles from "../styles/estilos";
 
// var cssStatusFatura = "bg-light text-dark";
var cssStatusFatura
var statusFatura = "Em Aberto";
var valorFatura = 0;


//Renderiza cada fatura passada como propriedade através do componente faturas.
const Fatura = (props) => {
    CarregaModelMockFatura(props.fatura);
    return (
        <View style={[styles.divRadius,cssStatusFatura]}>
            <Text>{"Valor Fatura: " + valorFatura}</Text>
            <Text>{"Mês Faturamento:" + props.fatura.MesReferencia}</Text>
            <Text>{"Status Fatura: " + statusFatura}</Text>
        </View>
    );
  };

//Carrega informações da fatura e realizando o calculo caso esteja vencida
//Define qual classe CSS será aplicada para o card de fatura
//fonte dos dados: /fatura.json
function CarregaModelMockFatura(fatura){ 
    let porcJuros = ContratoObj.JurosVencimento;  
    valorFatura = fatura.Valor; 
    //cssStatusFatura = "bg-light text-dark";

    if(fatura.Status === 1 ){
        statusFatura = "Paga";
    };
    
    if(fatura.Status === 2) {
        statusFatura = "Em atraso";
        //cssStatusFatura = "text-white bg-danger";
        let valorDoJuros = valorFatura * (porcJuros/100);
        let valorComJuros = valorDoJuros + valorFatura;
        valorFatura = valorComJuros; 
     };

     if (statusFatura ==="Em atraso"){
         StyleSheet.create({
            cssStatusFatura: {
                backgroundColor: "red"
            } 
        });
     }
     else{
         StyleSheet.create({
             
            cssStatusFatura: {
              backgroundColor: "ghostwhite"
            } 
        });
     }
};

export default Fatura;