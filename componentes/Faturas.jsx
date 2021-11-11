import FaturaObj from '../models/fatura.js';
import Fatura from './Fatura';
import React from 'react';
import { Text, View, FlatList,SafeAreaView } from "react-native";
import styles from "../styles/estilos";

//Renderiza o componente Faturas, usado o subcomponente Fatura, enviando as faturas carregadas
//do arquivo fatura.json
const Faturas = () => { 
 
  return(
    <View style={styles.component}>
      <View style={styles.componentHeader}>
        <Text style={[styles.h1,styles.componentTitle, styles.mt1, styles.mb1]}>Faturas</Text> 
      </View> 
      <View style={styles.componentContent}> 
          <FlatList 

            data={FaturaObj}
            renderItem={({ item }) => (
              <Fatura id={item.MesReferencia} fatura={item} />
            )}

            keyExtractor={item => item.MesReferencia}
            ItemSeparatorComponent={() => <View style={styles.liSeparator} />}
            style={styles.list} /> 
        </View> 
      </View>
  )
};
 

export default Faturas;
