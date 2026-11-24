import { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type DatosProducto = {
  nombre: string;
  precio: string;
  stock: string;
};

type Producto = {
  id: string;
  nombre: string;
  precio: number;
  stock: number;
};

export default function Practica16Screen() {
  const [datos, setDatos] = useState<DatosProducto>({
    nombre: '',
    precio: '',
    stock: '',
  });

  const [productos, setProductos] = useState<Producto[]>([]);

  function cambiarCampo<K extends keyof DatosProducto>(
    campo: K,
    valor: DatosProducto[K]
  ) {
    setDatos(actual => ({
      ...actual,
      [campo]: valor,
    }));
  }

  function enviarFormulario() {
    const nombre = datos.nombre.trim();
    const precio = Number(datos.precio.replace(',', '.'));
    const stock = Number(datos.stock);

    if (nombre === '') {
      Alert.alert('Error', 'Introduce el nombre del producto.');
      return;
    }

    if (datos.precio.trim() === '' || !Number.isFinite(precio) || precio <= 0) {
      Alert.alert('Error', 'Introduce un precio válido.');
      return;
    }

    if (
      datos.stock.trim() === '' ||
      !Number.isInteger(stock) ||
      stock < 0
    ) {
      Alert.alert('Error', 'Introduce un stock válido (número entero mayor o igual a 0).');
      return;
    }

    const nuevoProducto: Producto = {
      id: Date.now().toString(),
      nombre: nombre,
      precio: precio,
      stock: stock,
    };

    setProductos(actual => [...actual, nuevoProducto]);

    setDatos({
      nombre: '',
      precio: '',
      stock: '',
    });
  }

  function mostrarResumen() {
    if (productos.length === 0) {
      Alert.alert('Aviso', 'Todavía no hay productos registrados.');
      return;
    }

    const resumen = productos
      .map(
        (producto, index) =>
          `Producto ${index + 1}\n` +
          `Nombre: ${producto.nombre}\n` +
          `Precio: ${producto.precio.toFixed(2)} €\n` +
          `Stock: ${producto.stock} uds.`
      )
      .join('\n\n');

    Alert.alert('Resumen de productos', resumen);
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Práctica 16. Lista de productos</Text>

      <Text style={styles.subtitulo}>Datos del producto</Text>

      <Text style={styles.etiqueta}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce el nombre del producto"
        value={datos.nombre}
        onChangeText={v => cambiarCampo('nombre', v)}
      />

      <Text style={styles.etiqueta}>Precio (€)</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce el precio"
        keyboardType="numeric"
        value={datos.precio}
        onChangeText={v => cambiarCampo('precio', v)}
      />

      <Text style={styles.etiqueta}>Stock</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce las unidades en stock"
        keyboardType="numeric"
        value={datos.stock}
        onChangeText={v => cambiarCampo('stock', v)}
      />

      <View style={styles.boton}>
        <Button title="Añadir producto" onPress={enviarFormulario} />
      </View>

      <View style={styles.separador} />

      <FlatList
        data={productos}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.elemento,
              { backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#E0E0E0' },
            ]}
          >
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text>Precio: {item.precio.toFixed(2)} €</Text>
            <Text>Stock: {item.stock}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.cabecera}>Lista Productos</Text>
        }
        ListEmptyComponent={
          <Text style={styles.vacio}>
            Todavía no hay productos registrados.
          </Text>
        }
      />

      <View style={styles.boton}>
        <Button title="Mostrar resumen final" onPress={mostrarResumen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  etiqueta: {
    fontSize: 15,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 12,
  },
  boton: {
    marginVertical: 10,
  },
  separador: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 15,
  },
  cabecera: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  elemento: {
    padding: 12,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  vacio: {
    color: '#777777',
    textAlign: 'center',
    padding: 15,
  },
});
