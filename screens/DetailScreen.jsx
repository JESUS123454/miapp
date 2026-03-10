import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailScreen({ navigation, route }) {
  const { nombre } = route.params || {};

  useEffect(() => {
    if (nombre) {
      navigation.setOptions({ title: `Hola ${nombre}` });
    }
  }, [nombre]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>¡Bienvenido, {nombre}!</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  titulo: { fontSize: 24, marginBottom: 12 },
});
