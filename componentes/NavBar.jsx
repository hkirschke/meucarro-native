import { Text, View } from "react-native";
import React from "react";
import styles from "../styles/estilos";
import { Link } from "react-router-native"; 
 
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
        </View>
    );
};


export default NavBar;