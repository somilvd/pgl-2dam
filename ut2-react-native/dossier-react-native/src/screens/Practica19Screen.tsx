// src/screens/Practica19Screen.tsx
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type EmoticonoOpcion = {
  id: string;
  icono: keyof typeof Ionicons.glyphMap;
  color: string;
  secuencia: string;
};

const EMOTICONOS: EmoticonoOpcion[] = [
  { id: 'feliz', icono: 'happy-outline', color: '#2e7d32', secuencia: ':-)' },
  { id: 'triste', icono: 'sad-outline', color: '#c62828', secuencia: ':-(' },
  { id: 'sorpresa', icono: 'alert-circle-outline', color: '#ed6c02', secuencia: ':-O' },
  { id: 'guino', icono: 'eye-outline', color: '#0288d1', secuencia: ';-)' },
];

export default function Practica19Screen() {
  const [texto, setTexto] = useState('');

  const insertarEmoticono = (secuencia: string) => {
    setTexto((actual) => actual + ' ' + secuencia);
  };

  return (
    <SafeAreaView style={styles.pantalla} edges={['top', 'left', 'right']}>
      <Text style={styles.titulo}>Insertar Emoticonos</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.subtitulo}>Pulsa un icono para añadirlo al texto:</Text>

        <View style={styles.filaIconos}>
          {EMOTICONOS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.botonIcono}
              onPress={() => insertarEmoticono(item.secuencia)}
            >
              <Ionicons name={item.icono} size={32} color={item.color} />
              <Text style={styles.etiquetaSecuencia}>{item.secuencia}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Escribe aquí o pulsa los iconos superiores..."
          value={texto}
          onChangeText={setTexto}
          multiline
        />

        <TouchableOpacity
          style={styles.botonLimpiar}
          onPress={() => setTexto('')}
        >
          <Text style={styles.textoLimpiar}>Limpiar texto</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 16,
    textAlign: 'center',
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  subtitulo: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 12,
    textAlign: 'center',
  },
  filaIconos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  botonIcono: {
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  etiquetaSecuencia: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#334155',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
    fontSize: 16,
    marginBottom: 12,
  },
  botonLimpiar: {
    backgroundColor: '#e2e8f0',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoLimpiar: {
    color: '#334155',
    fontWeight: 'bold',
  },
});
