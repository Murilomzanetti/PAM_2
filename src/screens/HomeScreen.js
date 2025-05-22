import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para detalhes"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir para Perfil"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Voltar ao Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cor de fundo da tela
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#ddd', // Cor de fundo do container do botão
    margin: 10,
    width: windowWidth * 0.5, // 50% da largura da tela
    borderRadius: 5,
  },
});