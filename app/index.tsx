import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import { styles } from './styles';
import Image1 from '../src/assets/images/IconeWU.png'

const TelaInicial = () =>{

  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../src/assets/images/TelaInicial.jpg')}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} style={styles.leftItem}>
          <Image source={Image1} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.rightItem}>
          <Text style={styles.headerText}>Menu</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Bem-vindo</Text>
      <View style={styles.overlay}>
      <View style={styles.buttonContainer}>

        <TouchableOpacity activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enviar dinheiro</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Receber dinheiro</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.footer}>
      </View>
    </ImageBackground>
  );
};

export default TelaInicial;