import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Estilo padrão que não será usado neste exemplo
  // container: {
  //   flex: 1,
  //   backgroundColor: '#121015',
  //   paddingTop: 60,
  //   paddingHorizontal: 30,
  // },
  // // Outros estilos
  // title: {
  //   color: '#fff',
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },
  // image: {
  //   width: 50,
  //   height: 50,
  // },
  // input: {
  //   backgroundColor: '#1f1e25',
  //   color: '#fff',
  //   fontSize: 18,
  //   padding: Platform.OS === 'ios' ? 15 : 10,
  //   marginTop: 30,
  //   borderRadius: 7,
  // },
  // buttonSkill: {
  //   backgroundColor: '#1f1e25',
  //   padding: 15,
  //   borderRadius: 50,
  //   alignItems: 'center',
  //   marginVertical: 5,
  //   flexDirection: 'row',
  // },
  // textSkill: {
  //   marginLeft: 5,
  //   color: '#FFF',
  //   fontSize: 22,
  //   fontWeight: 'bold',
  // },



  // Estilos principais para a tela inicial:

  backgroundImage: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#25303d'
  },

  leftItem: {
    flex: 1,
    alignItems: 'flex-start'
  },

  image: {
    width: 40, 
    height: 40
  },

  rightItem: {
    flex: 1,
    alignItems: 'flex-end'
  },

  headerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#47afd1',
    borderColor: '#47afd1',
    borderRadius: 5,
    borderWidth: 1.5,
    padding: 4,
    paddingBottom: 2,
    textAlign: 'center'
  },

  text: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 50,
    color: '#65c5e6'
  },

  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)' // Transparência para sobrepor a imagem
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 110,
    width: 550,
    alignItems: 'center'
  },

  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
    margin: 10,
    borderColor: '#FFFFFF', 
    borderWidth: 1.5,   
    alignItems: 'center',
    width: 450
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18
  },

  footer: {
    bottom: 0,
    width: 500,
    padding: 25,
    backgroundColor: '#25303d'
  },

  headerTelaLogin: {
    flexDirection: 'row',
    justifyContent:"space-between",
    padding: 25,
    backgroundColor: '#25303d'
  },

  entrarHeader: {
    fontSize: 18,
    textAlign: 'center',
    color: '#f5d02a',
    marginLeft: 190
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    margin: 5, 
    width: 475,
    color: '#555a5c'
  },

  checkboxContainer: {
    flexDirection: 'row', // Mantém os elementos em linha
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginVertical: 10
  },

  checkboxRow: {
    flexDirection: 'row', 
    alignItems: 'center' 
  },

  checkbox: {
    alignSelf: 'center', // Centraliza o checkbox
    margin: 10
  },

  label: {
    marginLeft: 5, 
    fontSize: 16, 
    color: '#555a5c' 
  },

  forgotPassword: {
    color: '#3085a1', 
    marginTop: 15, 
    marginBottom: 20, 
    marginRight: 20,
    fontSize: 16, 
    fontWeight: 'bold'
  },

  buttonEnter: {
    backgroundColor: '#3085a1',
    padding: 12,
    margin: 10, 
    alignItems: 'center',
    width: 465
  },

  textEnter: {
    fontSize: 18,
    color: '#FFF'
  },

  impressaoDigital: {
    textAlign: 'center',
    color: '#555a5c',
    fontWeight: 'bold',
    marginTop: 5
  },

  cadastrar: {
    backgroundColor: '#fcefb3',
    padding: 12,
    marginTop: 20, 
    marginLeft: 10,
    alignItems: 'center',
    width: 465
  },

  cadastrarText: {
    color: '#3085a1',
    fontSize: 18,
    fontWeight: 'bold'
  },

  footerTelaLogin: {
    bottom: 0,
    top: 933,
    position: 'absolute',
    width: 500,
    padding: 25,
    backgroundColor: '#25303d'
  },
});