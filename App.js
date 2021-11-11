import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styles from "./styles/estilos";
import {View, KeyboardAvoidingView } from 'react-native';
import HeaderIndex from './componentes/HeaderIndex';
import MeuCarro from './componentes/MeuCarro';
import Contrato from './componentes/Contrato';
import Faturas from './componentes/Faturas';
import NavBar from './componentes/NavBar';
import { NativeRouter, Route } from "react-router-native";

export default function App() {
  return (
    <KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.app}>
        <NativeRouter>
          <View style={styles.conteudo}>
            <HeaderIndex />
            <Route exact path="/" 
              render={() => (
              <MeuCarro   />
              )}
            />
            <Route exact path="/Faturas" 
              render={() => (
              <Faturas />
              )}
            />
            <Route exact path="/Contrato" 
              render={() => (
              <Contrato   />
              )}
            />
            <NavBar />
            <StatusBar style="auto" /> 
          </View>
        </NativeRouter>
    </KeyboardAvoidingView>
  );
}