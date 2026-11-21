import { useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

type DatosPersona = {
  nombre: string;
  edad: string;
  casado: boolean;
  jubilado: boolean;
};

export default function Practica14Screen() {
  const [bordeActivado, setBordeActivado] = useState(false);

  const [datos, setDatos] = useState<DatosPersona>({
    nombre: '',
    edad: '',
    casado: false,
    jubilado: false,
  });

  function cambiarCampo<K extends keyof DatosPersona>(
    campo: K,
    valor: DatosPersona[K]
  ) {
    setDatos(actual => ({
      ...actual,
      [campo]: valor,
    }));
  }

  function enviarFormulario() {
    const nombre = datos.nombre.trim();
    const edad = Number(datos.edad);

    if (nombre === '') {
      Alert.alert('Error', 'Introduce un nombre.');
      return;
    }

    if (
      datos.edad.trim() === '' ||
      !Number.isFinite(edad) ||
      edad <= 0
    ) {
      Alert.alert('Error', 'Introduce una edad válida.');
      return;
    }

    Alert.alert(
      'Datos de la persona',
      `Nombre: ${nombre}\n` +
        `Edad: ${edad}\n` +
        `Casado: ${datos.casado ? 'Sí' : 'No'}\n` +
        `Jubilado: ${datos.jubilado ? 'Sí' : 'No'}`
    );
  }

  return (
    <View
      style={[
        styles.contenedor,
        bordeActivado && styles.bordeRojo,
      ]}
    >
      <Text style={styles.titulo}>
        Práctica 14. Borde activado por Switch
      </Text>

      <View style={styles.seccion}>
        <Text style={styles.subtitulo}>Activar borde rojo</Text>

        <Switch
          value={bordeActivado}
          onValueChange={setBordeActivado}
          trackColor={{
            false: '#795548',
            true: '#FF9800',
          }}
          thumbColor="#FFFFFF"
        />
      </View>

      <View style={styles.separador} />

      <Text style={styles.titulo}>Formulario de persona</Text>

      <Text style={styles.etiqueta}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce tu nombre"
        value={datos.nombre}
        onChangeText={v => cambiarCampo('nombre', v)}
      />

      <Text style={styles.etiqueta}>Edad</Text>
      <TextInput
        style={styles.input}
        placeholder="Introduce tu edad"
        keyboardType="numeric"
        value={datos.edad}
        onChangeText={v => cambiarCampo('edad', v)}
      />

      <View style={styles.fila}>
        <Text style={styles.etiqueta}>¿Está casado?</Text>
        <Switch
          value={datos.casado}
          onValueChange={v => cambiarCampo('casado', v)}
        />
      </View>

      <View style={styles.fila}>
        <Text style={styles.etiqueta}>¿Está jubilado?</Text>
        <Switch
          value={datos.jubilado}
          onValueChange={v => cambiarCampo('jubilado', v)}
        />
      </View>

      <View style={styles.boton}>
        <Button
          title="Enviar formulario"
          onPress={enviarFormulario}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  bordeRojo: {
    borderWidth: 5,
    borderColor: 'red',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: '600',
  },
  seccion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  separador: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 20,
  },
  etiqueta: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  boton: {
    marginTop: 15,
  },
});
