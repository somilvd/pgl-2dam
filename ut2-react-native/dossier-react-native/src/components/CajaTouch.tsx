import { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  nombre: string;
  bg?: string;
};

export default function CajaTouch({ nombre, bg = 'green' }: Props) {
  const [valorFlex, setValorFlex] = useState(0);

  const incrementar = () => {
    Alert.alert('Flex aumentado', `${nombre}: flex ahora vale ${valorFlex + 1}`);
    setValorFlex((n) => n + 1);
  };

  return (
    <View style={[styles.caja, { backgroundColor: bg, flex: valorFlex }]}>
      <Text style={styles.texto}>
        {nombre} (flex: {valorFlex})
      </Text>

      <View style={styles.botones}>
        <TouchableOpacity
          style={[styles.boton, styles.botonRestar]}
          activeOpacity={0.6}
          onPress={() => setValorFlex((n) => Math.max(0, n - 1))}
        >
          <Text style={styles.textoBoton}>- 1</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={[styles.boton, styles.botonSumar]}
          underlayColor="#1b5e20"
          onPress={incrementar}
        >
          <Text style={styles.textoBoton}>+ 1</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    minHeight: 70,
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  botones: {
    flexDirection: 'row',
    gap: 10,
  },
  boton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonRestar: {
    backgroundColor: '#d9534f',
  },
  botonSumar: {
    backgroundColor: '#2e7d32',
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
