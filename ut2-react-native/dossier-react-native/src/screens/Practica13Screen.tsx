import { useState } from 'react';
import {
    Alert,
    Button,
    Modal,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function Practica13Screen() {
  const [fondo, setFondo] = useState('#FFFFFF');
  const [visible, setVisible] = useState(false);
  const [colorEscrito, setColorEscrito] = useState('');
  const [activo, setActivo] = useState(false);

  const aceptarColor = () => {
    const color = colorEscrito.trim();

    if (!color) {
      Alert.alert('Error', 'Debes escribir un color.');
      return;
    }

    const coloresCSS = [
      'red', 'blue', 'green', 'yellow', 'orange',
      'pink', 'purple', 'black', 'white', 'lightblue',
      'lightgreen', 'lightpink', 'violet', 'tomato',
      'turquoise', 'gray', 'grey', 'brown',
    ];

    const esHexadecimal = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
    const esColorCSS = coloresCSS.includes(color.toLowerCase());

    if (!esHexadecimal && !esColorCSS) {
      Alert.alert('Color no válido', 'Introduce un nombre de color CSS válido o un código hexadecimal.');
      return;
    }

    setFondo(color);
    setVisible(false);
  };

  return (
    <View style={[styles.contenedor, { backgroundColor: fondo }]}>
      <Text style={styles.titulo}>Práctica 13</Text>

      <Text style={styles.descripcion}>
        Introducir el color
      </Text>

      <View style={styles.boton}>
        <Button
          title="Introducir color"
          onPress={() => setVisible(true)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.textoSwitch}>Activar opción</Text>
        <Switch
          value={activo}
          onValueChange={setActivo}
          thumbColor={activo ? 'orange' : 'brown'}
        />
      </View>

      <Text style={styles.estado}>
        Estado: {activo ? 'Activado' : 'Desactivado'}
      </Text>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.fondoModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloModal}>
              Introduce un color
            </Text>

            <TextInput
              style={styles.input}
              value={colorEscrito}
              onChangeText={setColorEscrito}
              placeholder="Ejemplo: lightblue o #FF0000"
              autoCapitalize="none"
            />

            <View style={styles.botonModal}>
              <Button
                title="Cancelar"
                color="#888888"
                onPress={() => setVisible(false)}
              />
            </View>

            <Button
              title="Aceptar"
              onPress={aceptarColor}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222222',
  },
  descripcion: {
    fontSize: 18,
    marginBottom: 35,
    color: '#333333',
  },
  boton: {
    width: 220,
    marginVertical: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 15,
  },
  textoSwitch: {
    fontSize: 18,
    color: '#222222',
  },
  estado: {
    fontSize: 16,
    marginTop: 10,
    color: '#333333',
  },
  fondoModal: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0008',
  },
  modal: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  tituloModal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    color: '#222222',
  },
  botonModal: {
    marginBottom: 10,
  },
});
