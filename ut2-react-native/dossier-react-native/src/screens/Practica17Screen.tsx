import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CardPersona from '../components/CardPersona';

export default function Practica17Screen() {
  const [ids, setIds] = useState<string[]>([]);

  function anadirTarjeta() {
    const nuevoId = Date.now().toString();
    setIds(actual => [...actual, nuevoId]);
  }

  function eliminarTarjeta(idAEliminar: string) {
    setIds(actual => actual.filter(id => id !== idAEliminar));
  }

  return (
    <View style={styles.contenedor}>
      <View style={styles.barraSuperior}>
        <Text style={styles.titulo}>Práctica 17. Cálculo de IMC</Text>
        <TouchableOpacity style={styles.botonAnadir} onPress={anadirTarjeta}>
          <Text style={styles.textoBotonAnadir}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={ids}
        keyExtractor={id => id}
        renderItem={({ item }) => (
          <CardPersona id={item} onEliminar={eliminarTarjeta} />
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>
            Pulsa el «+» para añadir una tarjeta de persona.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  barraSuperior: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  botonAnadir: {
    backgroundColor: '#1976D2',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotonAnadir: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  vacio: {
    textAlign: 'center',
    color: '#777777',
    marginTop: 30,
    fontSize: 15,
  },
});
