import { StyleSheet, Text, View } from 'react-native';
import CajaFlex from '../components/CajaFlex';

export default function Practica5Screen() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Práctica 5: Flex Dinámico</Text>
      <View style={styles.escenario}>
        <CajaFlex nombre="Caja 1" bg="#9e826c" />
        <CajaFlex nombre="Caja 2" bg="#899bd9" />
        <CajaFlex nombre="Caja 3" bg="#4caf50" />
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
