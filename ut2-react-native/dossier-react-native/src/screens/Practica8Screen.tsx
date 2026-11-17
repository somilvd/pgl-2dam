import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Practica8Screen() {
  const [circulos, setCirculos] = useState<string[]>([]);
  const [ajuste, setAjuste] = useState<'wrap' | 'nowrap'>('wrap');
  const [direccion, setDireccion] = useState<'row' | 'column'>('row');

  const agregarCirculo = () => {
    const n = circulos.length;
    const r = Math.min(255, Math.max(130, 190 - n * 15 + Math.max(0, (n - 4) * 28)));
    const g = Math.min(255, Math.max(165, 210 + n * 15 - Math.max(0, (n - 4) * 25)));
    const b = Math.min(255, Math.max(130, 185 - n * 12 + Math.max(0, (n - 3) * 25)));

    setCirculos((prev) => [...prev, `rgb(${r}, ${g}, ${b})`]);
  };

  return (
    <SafeAreaView style={styles.pantalla} edges={['top', 'left', 'right']}>
      <TouchableOpacity style={styles.botonAgregar} onPress={agregarCirculo}>
        <Text style={styles.textoBoton}>AGREGAR CÍRCULO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonWrap}
        onPress={() => setAjuste((prev) => (prev === 'wrap' ? 'nowrap' : 'wrap'))}
      >
        <Text style={styles.textoBoton}>{ajuste}. Pulse para cambiar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botonDireccion}
        onPress={() => setDireccion((prev) => (prev === 'row' ? 'column' : 'row'))}
      >
        <Text style={styles.textoBoton}>{direccion}. Pulse para cambiar</Text>
      </TouchableOpacity>

      <View
        style={[
          styles.escenario,
          { flexDirection: direccion, flexWrap: ajuste },
        ]}
      >
        {circulos.map((color, index) => (
          <View
            key={index}
            style={[styles.circulo, { backgroundColor: color }]}
          >
            <Text style={styles.textoCirculo}>C {index + 1}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#a6a6a6',
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 12,
    gap: 6,
  },
  botonAgregar: {
    backgroundColor: '#2196f3',
    paddingVertical: 10,
    borderRadius: 3,
    alignItems: 'center',
  },
  botonWrap: {
    backgroundColor: '#991b1b',
    paddingVertical: 7,
    borderRadius: 15,
    alignItems: 'center',
  },
  botonDireccion: {
    backgroundColor: '#f59e0b',
    paddingVertical: 7,
    borderRadius: 15,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',
  },
  escenario: {
    flex: 1,
    backgroundColor: '#cccccc',
    marginTop: 4,
    padding: 10,
    gap: 8,
    alignContent: 'flex-start',
  },
  circulo: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 2,
    borderColor: '#666666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCirculo: {
    color: '#555555',
    fontSize: 13,
  },
});
