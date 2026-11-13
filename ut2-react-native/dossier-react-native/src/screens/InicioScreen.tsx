import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ContadorScreen() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.pantalla}>
      <View style={styles.caja}>
        <Text style={styles.texto}>Contador: {contador}</Text>
        <Button title="Incrementar" onPress={() => setContador(n => n + 1)} />
        <View style={styles.separacion} />
        <Button title="Decrementar" onPress={() => setContador(n => n - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'royalblue',
    backgroundColor: 'aliceblue',
    borderRadius: 15,
    padding: 20,
  },
  texto: {
    fontSize: 18,
    marginBottom: 10,
  },
  separacion: {
    height: 10,
  },
});
