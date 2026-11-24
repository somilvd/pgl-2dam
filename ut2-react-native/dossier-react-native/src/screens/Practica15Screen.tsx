import { useState } from 'react';
import {
    Alert,
    Button,
    FlatList,
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

type Persona = {
  id: string;
  nombre: string;
  edad: number;
  casado: boolean;
  jubilado: boolean;
};

export default function Practica15Screen() {
  const [datos, setDatos] = useState<DatosPersona>({
    nombre: '',
    edad: '',
    casado: false,
    jubilado: false,
  });

  const [personas, setPersonas] = useState<Persona[]>([]);

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

    if (datos.edad.trim() === '' || !Number.isFinite(edad) || edad <= 0) {
      Alert.alert('Error', 'Introduce una edad válida.');
      return;
    }

    const nuevaPersona: Persona = {
      id: Date.now().toString(),
      nombre: nombre,
      edad: edad,
      casado: datos.casado,
      jubilado: datos.jubilado,
    };

    setPersonas(actual => [...actual, nuevaPersona]);

    setDatos({
      nombre: '',
      edad: '',
      casado: false,
      jubilado: false,
    });
  }

  function mostrarResumen() {
    if (personas.length === 0) {
      Alert.alert('Aviso', 'Todavía no hay personas registradas.');
      return;
    }

    const resumen = personas
      .map(
        (persona, index) =>
          `Persona ${index + 1}\n` +
          `Nombre: ${persona.nombre}\n` +
          `Edad: ${persona.edad}\n` +
          `Casado: ${persona.casado ? 'Sí' : 'No'}\n` +
          `Jubilado: ${persona.jubilado ? 'Sí' : 'No'}`
      )
      .join('\n\n');

    Alert.alert('Resumen de personas', resumen);
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        Práctica 15. Completar el formulario
      </Text>

      <Text style={styles.subtitulo}>Datos de la persona</Text>

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
          title="Añadir persona"
          onPress={enviarFormulario}
        />
      </View>

      <View style={styles.separador} />

      <Text style={styles.subtitulo}>Lista de personas</Text>

      <FlatList
        data={personas}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.elemento,
              { backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#EEEEEE' },
            ]}
          >
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text>Edad: {item.edad}</Text>
            <Text>Casado: {item.casado ? 'Sí' : 'No'}</Text>
            <Text>Jubilado: {item.jubilado ? 'Sí' : 'No'}</Text>
          </View>
        )}
        ListHeaderComponent={
          <Text style={styles.cabecera}>
            Personas registradas: {personas.length}
          </Text>
        }
        ListEmptyComponent={
          <Text style={styles.vacio}>
            Todavía no hay personas registradas.
          </Text>
        }
        ItemSeparatorComponent={() => (
          <View style={styles.separadorElemento} />
        )}
      />

      <View style={styles.boton}>
        <Button
          title="Mostrar resumen final"
          onPress={mostrarResumen}
        />
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
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
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
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  elemento: {
    padding: 12,
    borderRadius: 6,
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
  separadorElemento: {
    height: 8,
  },
});
