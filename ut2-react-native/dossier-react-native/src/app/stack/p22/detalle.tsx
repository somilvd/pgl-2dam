import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useTareas } from './_layout';

export default function PantallaDetalle() {
  const { tareas, setTareas } = useTareas();

  const agregarTarea = () => {
    setTareas((prev) => [
      ...prev,
      { id: prev.length + 1, texto: `Tarea añadida #${prev.length + 1}`, completada: false },
    ]);
  };

  const alternarTarea = (id: number) => {
    setTareas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        Total de tareas en el contexto: {tareas.length}
      </Text>

      {tareas.map((t) => (
        <TouchableOpacity key={t.id} onPress={() => alternarTarea(t.id)}>
          <Text style={styles.item}>
            {t.completada ? 'Completada' : 'No completada'} - {t.texto}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.boton}>
        <Button title="Añadir tarea al Contexto" onPress={agregarTarea} />
      </View>

      <Text style={styles.nota}>
        Usa el gesto de retroceso de Android para volver y ver los cambios.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  info: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  item: { fontSize: 16, marginVertical: 4 },
  boton: { marginTop: 24 },
  nota: { marginTop: 24, textAlign: 'center', color: '#666' },
});
