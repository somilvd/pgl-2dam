import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SegundaScreen() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Segunda Pantalla</Text>
      <Text style={styles.descripcion}>
        Estás en el nivel intermedio de la pila de navegación.
      </Text>

      <TouchableOpacity
        style={[styles.boton, styles.botonTercera]}
        onPress={() =>
          router.push({
            pathname: '/stack/p21/tercera',
            params: { userName: 'Somil' },
          })
        }
      >
        <Text style={styles.textoBoton}>Ir a Tercera (como Somil)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botonVolver} onPress={() => router.back()}>
        <Text style={styles.textoBoton}>Volver atrás</Text>
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
  },
  descripcion: {
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 20,
  },
  boton: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  botonTercera: {
    backgroundColor: '#0f766e',
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
