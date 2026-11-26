import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Pantalla Principal</Text>
      <Text style={styles.descripcion}>
        Pulsa el botón para apilar la segunda pantalla en el Stack.
      </Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => router.push('/stack/p20/detalle')}
      >
        <Text style={styles.textoBoton}>Ir a la segunda pantalla</Text>
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
    marginBottom: 8,
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
