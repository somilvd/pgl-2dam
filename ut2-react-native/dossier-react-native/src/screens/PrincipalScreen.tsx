import { StyleSheet, Text, View } from 'react-native';
import Caja from '../components/Caja';

export default function PrincipalScreen() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Contenedor Principal</Text>
      <View style={styles.escenario}>
        <Caja bg="#9e826c" />
        <Caja bg="#899bd9" />
        <Caja bg="#107c10" />
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
