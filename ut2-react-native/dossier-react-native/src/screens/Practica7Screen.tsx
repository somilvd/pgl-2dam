import { StyleSheet, Text, View } from 'react-native';
import CajaPersonalizada from '../components/CajaPersonalizada';

export default function Practica7Screen() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Práctica 7: Estilos Personalizados</Text>
      <View style={styles.escenario}>
        <CajaPersonalizada nombre="Caja A" bg="#9e826c" />
        <CajaPersonalizada
          nombre="Caja B"
          bg="#899bd9"
          style={{ borderRadius: 20, borderWidth: 7, borderColor: '#1e3a8a' }}
        />
        <CajaPersonalizada
          nombre="Caja C"
          bg="#4caf50"
          style={{ borderRadius: 35, borderStyle: 'dashed', borderWidth: 3 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#999999',
    paddingTop: 40,
    paddingHorizontal: 25,
    paddingBottom: 25,
  },
  titulo: {
    fontSize: 22,
    color: 'yellow',
    textAlign: 'center',
    marginBottom: 15,
  },
  escenario: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    padding: 15,
  },
});
