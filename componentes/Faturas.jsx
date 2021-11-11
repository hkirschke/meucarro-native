import FaturaObj from '../models/fatura.json';
import Fatura from './Fatura';
import React from 'react';
import { Text, View, FlatList,SafeAreaView } from "react-native";
import styles from "../styles/estilos";

const renderItem = ({ item }) => (
  // console.log("renderItem", item.MesReferencia)
  <Fatura fatura={item} key={item.MesReferencia}/>
);

const DATA = FaturaObj;

//Renderiza o componente Faturas, usado o subcomponente Fatura, enviando as faturas carregadas
//do arquivo fatura.json
const Faturas = () => { 
  // console.log(DATA);
  return(
    <View style={styles.component}>
      <View style={styles.componentHeader}>
        <Text style={[styles.h1,styles.componentTitle, styles.mt1, styles.mb1]}>Faturas</Text> 
      </View> 
      <View style={styles.componentContent}>
        <View style={[styles.divRadius, styles.bgLight]}>
        {/* <Fatura fatura={DATA.lstFatura[0]} /> */}
          <FlatList
            data={DATA.lstFatura[0]} 
            renderItem={renderItem}

            // data={DATA.lstFatura[0].fatura}
            // renderItem={({ item }) => (
            //   <Fatura id={item.MesReferencia} fatura={item} />
            // )}

            keyExtractor={item => item.MesReferencia}
            ItemSeparatorComponent={() => <View style={styles.liSeparator} />}
            style={styles.list} /> 
        </View> 
      </View>
    </View>
    // <View style={[styles.component]}>
    //   <View style={[styles.componentContent]}>
    //     <View style={[styles.card]}>
    //       <View style={[styles.cardHeader]}>
    //         <Text style={[styles.componentTitle]}>
    //           Faturas
    //         </Text>
    //       </View>
    //       <View style={[styles.cardBody]}>
    //         {/* <SafeAreaView style={styles.container}>
    //           <FlatList data={DATA}
    //                  renderItem={({ f }) => (
    //                   <Fatura
    //                     key={f.MesReferencia}
    //                     fatura={f} />
    //                 )}

    //               keyExtractor={item => item.MesReferencia}
    //               ItemSeparatorComponent={() => <View style={styles.liSeparator} />}
    //               style={styles.list} />
    //         </SafeAreaView> */}
            
    //       {/* <FlatList data={FaturaObj.lstFatura} renderItem={({ f }) => (
    //         <Fatura
    //           key={f.MesReferencia}
    //           fatura={f} />
    //       )}
    //       keyExtractor={(f) => f.MesReferencia}
    //       ItemSeparatorComponent={() => <View style={styles.liSeparator} />}
    //       style={styles.list} /> */}
    //       </View>
    //     </View>
    //   </View>
    // </View>
  )
};
 

export default Faturas;
