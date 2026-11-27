import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function Index() {
  return (
    <ScrollView style={styles.fondo} contentContainerStyle={styles.contenedor}>
      <Text style={styles.titulo}>Prácticas de React Native con Expo</Text>

      <Link href="/practica01" style={styles.enlace}>Práctica 1</Link>
      <Link href="/practica02" style={styles.enlace}>Práctica 2</Link>
      <Link href="/practica03" style={styles.enlace}>Práctica 3</Link>
      <Link href="/practica04" style={styles.enlace}>Práctica 4</Link>
      <Link href="/practica05" style={styles.enlace}>Práctica 5</Link>
      <Link href="/practica06" style={styles.enlace}>Práctica 6</Link>
      <Link href="/practica07" style={styles.enlace}>Práctica 7</Link>
      <Link href="/practica08" style={styles.enlace}>Práctica 8</Link>
      <Link href="/practica09" style={styles.enlace}>Práctica 9</Link>
      <Link href="/practica09-1" style={styles.enlace}>Práctica 9.1</Link>
      <Link href="/practica10" style={styles.enlace}>Práctica 10</Link>
      <Link href="/practica11" style={styles.enlace}>Práctica 11</Link>
      <Link href="/practica12" style={styles.enlace}>Práctica 12</Link>
      <Link href="/practica13" style={styles.enlace}>Práctica 13</Link>
      <Link href="/practica14" style={styles.enlace}>Práctica 14</Link>
      <Link href="/practica15" style={styles.enlace}>Práctica 15</Link>
      <Link href="/practica16" style={styles.enlace}>Práctica 16</Link>
      <Link href="/practica17" style={styles.enlace}>Práctica 17</Link>
      <Link href="/practica18" style={styles.enlace}>Práctica 18</Link>
      <Link href="/practica19" style={styles.enlace}>Práctica 19</Link>
      <Link href="/stack/p20" style={styles.enlace}>Práctica 20</Link>
      <Link href="/stack/p21" style={styles.enlace}>Práctica 21</Link>
      <Link href="/stack/p22" style={styles.enlace}>Práctica 22</Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  contenedor: {
    padding: 20,
    gap: 12,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  enlace: {
    backgroundColor: '#FFFFFF',
    color: '#1D4ED8',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
});
