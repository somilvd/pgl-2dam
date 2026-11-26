import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DetalleScreen() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Segunda Pantalla</Text>
      <Text style={styles.descripcion}>
        Puedes regresar usando la flecha superior de la cabecera o este botón.
      </Text>

      <TouchableOpacity
        style={styles.botonVolver}
        onPress={() => router.back()}
      >
        <Text style={styles.textoBoton}>Volver a la Página Principal</Text>
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
  botonVolver: {
    backgroundColor: '#475569',
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
