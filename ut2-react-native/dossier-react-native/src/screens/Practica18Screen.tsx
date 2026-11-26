import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type EntradaDiario = {
  id: string;
  texto: string;
  fecha: string;
  emocion: 'feliz' | 'triste' | 'neutral';
};

export default function Practica18Screen() {
  const [texto, setTexto] = useState('');
  const [entradas, setEntradas] = useState<EntradaDiario[]>([]);

  const detectarEmocion = (mensaje: string): 'feliz' | 'triste' | 'neutral' => {
    if (mensaje.includes(':-)')) return 'feliz';
    if (mensaje.includes(':-(')) return 'triste';
    return 'neutral';
  };

  const agregarEntrada = () => {
    const contenido = texto.trim();
    if (!contenido) return;

    const ahora = new Date();
    const fechaFormateada = `${ahora.toLocaleDateString()} ${ahora.toLocaleTimeString()}`;

    const nuevaEntrada: EntradaDiario = {
      id: Date.now().toString(),
      texto: contenido,
      fecha: fechaFormateada,
      emocion: detectarEmocion(contenido),
    };

    setEntradas((prev) => [nuevaEntrada, ...prev]);
    setTexto('');
  };

  const renderIconoEmocion = (emocion: EntradaDiario['emocion']) => {
    if (emocion === 'feliz') {
      return <Ionicons name="happy-outline" size={32} color="#2e7d32" />;
    }
    if (emocion === 'triste') {
      return <Ionicons name="sad-outline" size={32} color="#c62828" />;
    }
    return <Ionicons name="remove-circle-outline" size={32} color="#757575" />;
  };

  return (
    <SafeAreaView style={styles.pantalla} edges={['top', 'left', 'right']}>
      <Text style={styles.titulo}>Diario de Emociones</Text>

      <View style={styles.formulario}>
        <TextInput
          style={styles.input}
          placeholder="¿Cómo te sientes hoy? Usa :-) o :-("
          value={texto}
          onChangeText={setTexto}
          multiline
        />
        <TouchableOpacity style={styles.boton} onPress={agregarEntrada}>
          <Text style={styles.textoBoton}>Guardar entrada</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={entradas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        ListEmptyComponent={
          <Text style={styles.vacio}>Aún no hay entradas en el diario.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <View style={styles.iconoContenedor}>
              {renderIconoEmocion(item.emocion)}
            </View>
            <View style={styles.contenidoTarjeta}>
              <Text style={styles.fecha}>{item.fecha}</Text>
              <Text style={styles.textoEntrada}>{item.texto}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 12,
    textAlign: 'center',
  },
  formulario: {
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 8,
    padding: 10,
    minHeight: 60,
    textAlignVertical: 'top',
    marginBottom: 10,
    fontSize: 15,
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  lista: {
    paddingBottom: 20,
  },
  vacio: {
    textAlign: 'center',
    color: '#64748b',
    marginTop: 20,
  },
  tarjeta: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
  },
  iconoContenedor: {
    marginRight: 12,
  },
  contenidoTarjeta: {
    flex: 1,
  },
  fecha: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 4,
  },
  textoEntrada: {
    fontSize: 15,
    color: '#1e293b',
  },
});
