import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type JustifyTipo =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignTipo = 'stretch' | 'center' | 'flex-start' | 'flex-end';

const VALORES_JUSTIFY: JustifyTipo[] = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];

const BOTONES_ALIGN: AlignTipo[] = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
];

export default function Practica9Screen() {
  const [textoJustify, setTextoJustify] = useState('space-around');
  const [alignItems, setAlignItems] = useState<AlignTipo>('center');

  const valorLimpio = textoJustify.trim().toLowerCase() as JustifyTipo;
  const justifyContent: JustifyTipo = VALORES_JUSTIFY.includes(valorLimpio)
    ? valorLimpio
    : 'center';

  return (
    <SafeAreaView style={styles.pantalla} edges={['top', 'left', 'right']}>
      <TextInput
        style={styles.input}
        placeholder="center, space-around, space-between..."
        value={textoJustify}
        onChangeText={setTextoJustify}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View style={styles.filaBotones}>
        {BOTONES_ALIGN.map((valor) => (
          <TouchableOpacity
            key={valor}
            style={[
              styles.boton,
              alignItems === valor && styles.botonActivo,
            ]}
            onPress={() => setAlignItems(valor)}
          >
            <Text style={styles.textoBoton}>{valor.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.estadoTexto}>
        Activa → justifyContent: {justifyContent} | alignItems: {alignItems}
      </Text>

      <View
        style={[
          styles.escenario,
          { justifyContent, alignItems },
        ]}
      >
        <Image
          source={require('../../capturas/img/Tenerife.png')}
          style={styles.imagen}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/?size=80&id=OTlhcalmkiBX&format=png' }}
          style={styles.imagen}
        />
        <Image
          source={{ uri: 'https://img.icons8.com/?size=50&id=58811&format=png' }}
          style={styles.imagen}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#a6a6a6',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    gap: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#555555',
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
  },
  filaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 6,
  },
  boton: {
    flex: 1,
    backgroundColor: '#2196f3',
    paddingVertical: 9,
    borderRadius: 4,
    alignItems: 'center',
  },
  botonActivo: {
    backgroundColor: '#1e3a8a',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 11,
    fontWeight: '600',
  },
  estadoTexto: {
    backgroundColor: '#e2e8f0',
    padding: 8,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center',
  },
  escenario: {
    flex: 1,
    flexWrap: 'nowrap',
    backgroundColor: '#cccccc',
    padding: 16,
  },
  imagen: {
    width: 60,
    height: 60,
  },
});
