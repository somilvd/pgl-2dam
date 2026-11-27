import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useTareas } from './_layout';

export default function PantallaPrincipal() {
  const { tareas, setTareas } = useTareas();

  const alternarTarea = (id: number) => {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>Lista de Tareas (Pantalla 1):</Text>
      
      {tareas.map((t) => (
        <TouchableOpacity key={t.id} onPress={() => alternarTarea(t.id)}>
          <Text style={styles.item}>
            {t.completada ? 'Completada' : 'No completada'} - {t.texto}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.boton}>
        <Link href="/stack/p22/detalle" asChild>
          <Button title="Ir a Pantalla 2 (Añadir tarea)" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  subtitulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  item: { fontSize: 16, marginVertical: 4 },
  boton: { marginTop: 24 },
});
