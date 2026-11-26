import { router } from 'expo-router';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function PrimeraScreen() {
  const [nombre, setNombre] = useState('Pablo');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Primera Pantalla (Inicio)</Text>

      <Text style={styles.etiqueta}>Nombre de usuario a enviar:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Escribe un nombre..."/>

      <TouchableOpacity style={styles.boton} onPress={() => router.push('/stack/p21/segunda')}>
        <Text style={styles.textoBoton}>Ir a Segunda Pantalla</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, styles.botonSecundario]}
        onPress={() =>
          router.push({
            pathname: '/stack/p21/tercera',
            params: { userName: nombre.trim() || 'invitado' },
          })
        }
      >
        <Text style={styles.textoBoton}>Ir a Tercera con Parámetro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f6f9',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 20,
  },
  etiqueta: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#475569',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  boton: {
    width: '100%',
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  botonSecundario: {
    backgroundColor: '#0f766e',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
