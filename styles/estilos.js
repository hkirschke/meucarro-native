import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  app: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#a7b591", 
  },

  conteudo: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly", 
    backgroundColor: "#a7b591",
  },

  headerBar: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerBarFive: {
    height: 90,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#198754",
    // color: "#fff", 
  },

  appName: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 12,
  },

  textWhite:{
    color: "white"
  },

  imgCenter:{
     width: '100%',
     height: '50%'
  },

  badge: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    padding: 5,
    minWidth: 20,
    //textAlign: "center",
    marginRight: 12,
    //fontSize: 16,
    //fontWeight: "bold",
  },

  component: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    margin: 18,
  },
  
  componentTitle: {
    marginLeft: 1,
    flex: 1,
    color: "white"
  },

  componentHeader: { 
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
  },
  
  componentContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch"
  },

  componentFooter: { 
    display: "flex",
    flexDirection: "row",
  },

  // títulos
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },

  h2: {
    fontSize: 24,
    fontWeight: "bold",
  },

  h3: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 5
  },

  h4: {
    fontSize: 14,
    padding: 5
  },

  // Listas
  list: {
    borderColor: "#dce5e8",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    flex: 1,
  },
  li: {
    padding: 5,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  liText: {
    fontSize: 18,
    margin: 10,
    flex: 1,
  },
  liSeparator: {
    height: 1,
    backgroundColor: "#CED0CE",
  },

  // Formulário
  field: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    flex: 1,
    padding: 16,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#dce5e8",
    borderRadius: 10,
    fontSize: 18,
  },

  // botões
  button: {
    height: 30,
    padding: 10,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 2,
    marginLeft: 2,
  }, 

  buttonNav: {
    height: 60,
    width: "33%", 
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: 2,
    marginLeft: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "green"
  }, 

  buttonImg: {
    height: 15,
    width: 15,
    resizeMode: "stretch",
  },

  // cores
  active: {
    color: "#fff",
    backgroundColor: "#3b78ac",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2a679b",
  },
  primary: {
    color: "#fff",
    backgroundColor: "#3b78ac",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2a679b",
  },
  secondary: {
    color: "#000",
    backgroundColor: "#cddfeb",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#bcceda",
  },
  success: {
    color: "#fff",
    backgroundColor: "#2a9d8f",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#198c7e", 
  },

  warning: {
    color: "#000",
    backgroundColor: "#ffd166",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#eec055",
  },
  danger: {
    color: "#fff",
    backgroundColor: "#ef233c",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#de122b",
  },
  light: {
    color: "#000",
    backgroundColor: "#edf6f9",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#dce5e8",
  },
  dark: {
    color: "#fff",
    backgroundColor: "#1d3a4e",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0c293d",
  },

  // espaçamentos
  mt1: {
    marginTop: 12,
  },
  mb1: {
     marginBottom: 12,
  },
  mt2: {
    marginTop: 24,
  },
  mt3: {
    marginTop: 36,
  },
  mt4: {
    marginTop: 48,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //NavLink
  navlink: {
    // textDecorationStyle: none,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  footerFive: {
    position: "absolute",
    // width: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardStyle: {
    backgroundColor: "gainsboro"
  },

  cardFooter: {
    backgroundColor: "gainsboro"  
  }, 

  divRadius: {
    borderRadius: 10,
  },

  divRadiusTop: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  divRadiusBot: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  widthCard: {
    width: 24,
  },
 
  appName: {
    fontSize: 2,
    marginLeft: 1,
  },
  
  cardHeader:{
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,.03)",
  },

  textMuted: {
    color: "powderblue", //"powderblue" , "mintcream"
  },
  
  // textCenter: {
  //   textAlign: "center",
  // },

  card: {
    position: "relative",
    // display: -webkit-box,
    // display: -ms-flexbox,
    display: "flex", 
    flexDirection: "column",
    minWidth: 0,
    // wordWrap: "break-word", 
    // backgroundClip: "border-box",
    // border: 1,
    color: "rgba(0,0,0,.125)", 
    borderRadius: 10,
    backgroundColor: "ghostwhite", // "whitesmoke", "ivory"
  },

  cardBody: {
    flex: 1,
    padding: 1.25,
  },

  bgLight:{
    backgroundColor: "ghostwhite"
  },
  
  textDark: {
    color: "black"
  },
 
});
