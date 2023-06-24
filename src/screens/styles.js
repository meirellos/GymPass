import { StyleSheet, Dimensions } from "react-native-web";

const width = Dimensions.get("screen").width;

export default StyleSheet.create({
  //Styles login.js
  bloco: {
    display: "flex",
    alignItems: "center",
    marginTop: "30px",
  },
  logo: {
    flexDirection: "column",
    justifyContent: "center",
    width: 380,
    height: 300,
    borderRadius: "4px",

  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 20,
    borderWidth: 3,
    padding: 10,
    backgroundColor: "White",
    borderRadius: 6,
    borderColor: "#a0522d"
  },
  botoesLogin:{
    flexDirection: "row",
    display: "flex",
    alignItems: 'center',
    justifyContent: "center",
  },
  botaoLogin: {
  padding: 10,
  paddingHorizontal: 60,
  margin: 5,
  backgroundColor: "#a0522d",
  borderRadius: 6,
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  botaoCadastro: {
  margin: 5,
  borderRadius: 6,
  },
  textoCadastro: {
    color: "#000",
    textAlign: "center",
    fontWeight: "bold",
  },
  textoCadastro2: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  //Styles cadastro.js

  modalCadastro:{
    margin: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },

  //Styles gym.js
  blocoBanner: {
    display: "flex",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 150,
  },
  titulo: {
    fontFamily: "Arial",
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
    color: '#a0522d'
  },
  titulo2: {
    fontFamily: "Montserrat",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    color: '#a0522d'
  },
  logos: {
    width: 75,
    height: 75,
    borderRadius: 4,
    margin: 6,
  },
  blocoAcademias: {
    flexDirection: "row",
    display: "flex",
    margin: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#dedede",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  tituloAcademia: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 10,
  },
  descAcademia: {
    fontWeight: "normal",
    fontSize: 12,
  },
  botaoAcademia: {
    margin: 16,
    marginTop: 16,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#a0522d",
    borderRadius: 6,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },

  //Styles planos.js
  blocoPlanos: {
    flexDirection: "column",
    display: "flex",
    marginLeft: 10,
    justifyContent: "space-between",
    borderBottomColor: "#dedede",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  precoItem: {
    fontSize: 16,
    lineHeight: 55,
    marginLeft: 12,
    fontWeight: "bold",
    color: "#ff0000",
  },
  botaoSelecionar:{
    width: 100, 
    height: 40,
    backgroundColor: "#f23333",
    borderRadius: 6,
    left: '50%',
    top: 10,
    transform: 'translate(-50%, -50%)',
  },
  textoBotaoPlano:{
    marginTop: -7,
    textAlign: 'center',
    color: '#fff'
  },
  //Styles confirmaAcad.js
  confirmaAcadText: {
    backgroundColor: '#fff',
    border: '1px solid #fff',
    borderRadius: '8px',
    margin: 50,
    padding: 30,
    textAlign: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  confirmaText:{
    color: '#ff0000' ,
    fontWeight: 'bold',
    fontSize: '16px',
  },
});
