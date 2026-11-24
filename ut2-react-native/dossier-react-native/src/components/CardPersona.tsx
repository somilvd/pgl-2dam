import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  id: string;
  onEliminar: (id: string) => void;
};

export default function CardPersona({ id, onEliminar }: Props) {
  const [nombre, setNombre] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  
  const alturaNum = Number(altura.replace(',', '.'));
  const pesoNum = Number(peso.replace(',', '.'));

  const datosValidos =
    Number.isFinite(alturaNum) &&
    alturaNum > 0 &&
    Number.isFinite(pesoNum) &&
    pesoNum > 0;

  const imc = datosValidos ? pesoNum / (alturaNum * alturaNum) : null;

  return (
    <View style={styles.tarjeta}>
      <View style={styles.cabecera}>
        <Text style={styles.idTexto}>ID: {id}</Text>
        <TouchableOpacity
          style={styles.botonEliminar}
          onPress={() => onEliminar(id)}
        >
          <Text style={styles.textoEliminar}>Eliminar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.etiqueta}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Ana"
        value={nombre}
        onChangeText={setNombre}
      />

      <View style={styles.filaInputs}>
        <View style={styles.columna}>
          <Text style={styles.etiqueta}>Altura (m)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. 1.75"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />
        </View>

        <View style={styles.columna}>
          <Text style={styles.etiqueta}>Peso (kg)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej. 70"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />
        </View>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.textoImc}>
          {nombre.trim() !== '' ? `${nombre.trim()} — ` : ''}
          IMC: {imc !== null ? imc.toFixed(2) : '--'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  cabecera: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  idTexto: {
    fontSize: 12,
    color: '#666666',
    fontWeight: 'bold',
  },
  botonEliminar: {
    backgroundColor: '#D32F2F',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  textoEliminar: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  etiqueta: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 6,
    padding: 8,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
  },
  filaInputs: {
    flexDirection: 'row',
    gap: 10,
  },
  columna: {
    flex: 1,
  },
  resultado: {
    marginTop: 4,
    padding: 10,
    backgroundColor: '#E3F2FD',
    borderRadius: 6,
    alignItems: 'center',
  },
  textoImc: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D47A1',
  },
});
