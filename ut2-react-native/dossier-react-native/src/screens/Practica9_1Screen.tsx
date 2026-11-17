import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IMAGENES = [
  { nombre: 'Messi', source: require('../../capturas/img/messi.png') },
  { nombre: 'León', source: require('../../capturas/img/leon.jpeg') },
  { nombre: 'Spotify', source: require('../../capturas/img/soptify.png') },
];

export default function Practica9_1Screen() {
  const [indice, setIndice] = useState(0);

  const cambiarImagen = () => {
    let aleatorio = Math.floor(Math.random() * IMAGENES.length);
    if (aleatorio === indice) {
      aleatorio = (indice + 1) % IMAGENES.length;
    }
    setIndice(aleatorio);
  };

  const actual = IMAGENES[indice];

  return (
    <SafeAreaView style={styles.contenedor} edges={['top', 'left', 'right']}>
      <Text style={styles.texto}>Mostrando: {actual.nombre}</Text>

      <View style={styles.cajaImagen}>
        <Image source={actual.source} style={styles.img} resizeMode="contain" />
      </View>

      <TouchableOpacity style={styles.boton} onPress={cambiarImagen} activeOpacity={0.7}>
        <Text style={styles.textoBoton}>Cambiar imagen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  texto: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 16,
  },
  cajaImagen: {
    width: 190,
    height: 190,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#999999',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    width: 150,
    height: 150,
  },
  boton: {
    backgroundColor: '#333333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});
