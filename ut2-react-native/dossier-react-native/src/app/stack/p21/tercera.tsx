import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TerceraScreen() {
  const { userName } = useLocalSearchParams<{ userName?: string }>();

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Tercera Pantalla</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.saludo}>Hola, {userName ?? 'invitado'}</Text>
        <Text style={styles.subtexto}>
          Parámetro recibido mediante useLocalSearchParams()
        </Text>
      </View>

      <TouchableOpacity style={styles.botonVolver} onPress={() => router.back()}>

        <Text style={styles.textoBoton}>Volver</Text>
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
    marginBottom: 16,
  },
  tarjeta: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  saludo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f766e',
    marginBottom: 6,
  },
  subtexto: {
    fontSize: 13,
    color: '#64748b',
  },
  botonVolver: {
    width: '100%',
    backgroundColor: '#475569',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
