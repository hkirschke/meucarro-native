import { Text, View,Button } from "react-native";
import React from "react";
import styles from "../styles/estilos";
import { Link, Route } from "react-router-native";

function MeuCarro() {
  return <Text style={styles.header}>Meu Carro</Text>;
}

function Faturas() {
  return <Text style={styles.header}>Faturas</Text>;
}

function Contrato() {
  return <Text style={styles.header}>Contrato</Text>;
}


//Renderiza o componente de Navbar para a navegação entre as telas da aplicação.
const NavBar = () =>{
    return ( 
        <View style={[styles.componentFooter, styles.mt1]}>
          <Link  to="/"  style={[styles.success,styles.buttonNav]} >
            <Text style={[styles.textWhite]}>Meu Carro</Text>
          </Link>
          <Link  to="/Faturas"  style={[styles.success,styles.buttonNav]} >
            <Text style={[styles.textWhite]}>Faturas</Text>
          </Link>
          <Link  to="/Contrato"  style={[styles.success,styles.buttonNav]} >
            <Text style={[styles.textWhite]}>Contrato</Text>
          </Link>

          <Route exact path="/" component={MeuCarro} />
          <Route path="/Faturas" component={Faturas} />
          <Route path="/Contrato" component={Contrato} />
        </View>
    );
};


export default NavBar;