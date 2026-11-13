import { StyleSheet, Text, View } from 'react-native';

export default function HolaMundoScreen() {
  return (
    <View style={styles.pantalla}>
      <Text>¡Hola mundo! Soy Somil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
});
