import FaturaObj from '../models/fatura.json';
import Fatura from './Fatura';
import { Text, View } from "react-native";
import styles from "../styles/estilos";

//Renderiza o componente Faturas, usado o subcomponente Fatura, enviando as faturas carregadas
//do arquivo fatura.json
const Faturas = () => { 
  return(
    <View style={[styles.component]}>
      <View style={[styles.componentContent]}>
        <View style={[styles.card]}>
          <View style={[styles.cardHeader]}>
            <Text style={[styles.componentTitle]}>
              Faturas
            </Text>
          </View>
          <View style={[styles.cardBody]}>
          <FlatList data={FaturaObj.lstFatura} renderItem={({ f }) => (
            <Fatura
              key={f.MesReferencia}
              fatura={f} />
          )}
          keyExtractor={(f) => f.MesReferencia}
          ItemSeparatorComponent={() => <View style={styles.liSeparator} />}
          style={styles.list} />
          </View>
        </View>
      </View>
    </View>
  )
};
 

export default Faturas;
