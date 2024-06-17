import CheckBox from 'expo-checkbox';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from "./styles";

const TelaLogin = () => {
  
  return (

    <View>
      <View style={styles.headerTelaLogin}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.entrarHeader}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.rightItem}>
          <Text style={styles.headerText}>Menu</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput 
        placeholder={'E-mail'}
        style={styles.input}
      />
      <TextInput
        placeholder={'Senha'}
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxRow}>
          <CheckBox
            style={styles.checkbox}
          />
          <Text style={styles.label}>Lembrar-me</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Text 
            style={styles.forgotPassword}
          >
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.buttonEnter}>
        <Text style={styles.textEnter}>Entre</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.impressaoDigital}>Iniciar sessão com impressão digital</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.cadastrar}>
        <Text style={styles.cadastrarText}>Cadastre-se</Text>
      </TouchableOpacity>
      <View style={styles.footerTelaLogin}>
      </View>
    </View>
  );
};

export default TelaLogin;

