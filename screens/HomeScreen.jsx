import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    setMensaje('Escribe tu nombre y pulsa Entrar');
  }, []);

  const irADetalles = () => {
    navigation.navigate('Details', { nombre });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pantalla de inicio</Text>
      <Text>{mensaje}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Button
        title="Entrar"
        onPress={irADetalles}
        disabled={nombre.trim().length === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  titulo: { fontSize: 24, marginBottom: 12 },
  input: { borderWidth: 1, padding: 8, marginVertical: 12 },
});
