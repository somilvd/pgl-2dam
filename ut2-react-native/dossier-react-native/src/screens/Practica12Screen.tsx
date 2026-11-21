import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Modal,
  TextInput,
} from 'react-native';

const colores = [
  'lightblue',
  'lightgreen',
  'lightpink',
  'lightyellow',
  'orange',
  'violet',
  'tomato',
  'turquoise',
];

export default function Practica12Screen() {
  const [fondo, setFondo] = useState('#FFFFFF');
  const [visible, setVisible] = useState(false);
  const [colorEscrito, setColorEscrito] = useState('lightblue');

  const cambiarColor = () => {
    const indice = Math.floor(Math.random() * colores.length);
    const colorPropuesto = colores[indice];

    Alert.alert(
      'Cambiar de color',
      `¿Quieres cambiar el fondo al color ${colorPropuesto}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => setFondo(colorPropuesto),
        },
      ],
    );
  };

  const aceptarColorEscrito = () => {
    if (colorEscrito.trim() === '') {
      Alert.alert('Error', 'Escribe un color antes de continuar.');
      return;
    }

    setFondo(colorEscrito.trim());
    setVisible(false);
  };

  return (
    <View style={[styles.contenedor, { backgroundColor: fondo }]}>
      <Text style={styles.titulo}>Práctica 12</Text>

      <Text style={styles.descripcion}>
        Color aleatorio con confirmación
      </Text>

      <View style={styles.boton}>
        <Button
          title="Cambiar de color"
          onPress={cambiarColor}
        />
      </View>

      <View style={styles.boton}>
        <Button
          title="Escribir un color"
          onPress={() => setVisible(true)}
        />
      </View>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.fondoModal}>
          <View style={styles.modal}>
            <Text style={styles.tituloModal}>
              Introducir un color
            </Text>

            <TextInput
              style={styles.input}
              value={colorEscrito}
              onChangeText={setColorEscrito}
              placeholder="Color CSS"
              autoCapitalize="none"
            />

            <View style={styles.botonModal}>
              <Button
                title="Cancelar"
                onPress={() => setVisible(false)}
                color="#888888"
              />
            </View>

            <Button
              title="Aceptar"
              onPress={aceptarColorEscrito}
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
    marginVertical: 10,
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
