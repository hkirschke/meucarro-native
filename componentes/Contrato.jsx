import { Text, View } from "react-native";
import styles from "../styles/estilos";
import ContratoObj from '../models/contrato.json';

//Renderiza o componente Contrato, carregando dados do arquivo contrato.json
const Contrato = () => { 
  return (
    <View style={[styles.componentContent]}>
      <View style={[styles.card]}>
        <View style={[styles.cardHeader]}>
          <Text style={[styles.componentTitle]}>
            Dados do contrato
          </Text>
        </View>
        <View style={[styles.cardBody]}>
          <View style={[styles.divRadius, styles.bgLight]}>
            <Text style={[styles.textDark, styles.h3]}>{"Vencimento do contrato: " + ContratoObj.Vencimento}</Text>
            <Text style={[styles.textDark, styles.h3]}>{"Dia Vencimento Fatura: " + ContratoObj.DiaVencimentoFatura}</Text>
            <Text style={[styles.textDark, styles.h3]}>{"Valor do aluguel contratado: " + ContratoObj.Valor}</Text>
            <Text style={[styles.divRadiusBot, styles.textDark, styles.h4, styles.bgLight, styles.cardFooter]}>{"Juros vencimento da fatura: " +  ContratoObj.JurosVencimento}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Contrato;