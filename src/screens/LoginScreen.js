import {View, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { useState } from 'react'

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Logar = () => {
        if (email=='pao@email.com' && senha==1234){
          navigation.navigate('Home');  
        }
    };

    return (
        <View style={StyleSheet.formContainer}>
            <TextInput 
                style={styles.input}
                placeholder="Email"
                keyboardType="email-adress"
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="numeric"
                value={senha}
                onChangeText={setSenha}
            />

            <Button title="Entrar" onPress={Logar} />
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,

    },

    input: {
        heigth: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

