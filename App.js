import React, { useState } from 'react';
import { AsyncStorage, View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [valor, setValor] = useState('');
  const [valorAlmacenado, setValorAlmacenado] = useState('');

  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('myKey', valor);
      setValor('');
    } catch (error) {
      console.error(error);
    }
  };

  const recuperarDatos = async () => {
    try {
      const valorAlmacenado = await AsyncStorage.getItem('myKey');
      setValorAlmacenado(valorAlmacenado);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 50}}>
      <Text>Introduce el valor:</Text>
      <TextInput
        value={valor}
        onChangeText={text => setValor(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      <View style={{ marginTop: 10 }}>
        <Button title="Guardar" onPress={guardarDatos} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Recuperar" onPress={recuperarDatos} />
      </View>
      <View style={{ marginTop: 10, alignItems: 'center'}}>
        <Text>Valor Almacenado: {valorAlmacenado}</Text>
      </View>
    </View>
  );
};

export default App;
