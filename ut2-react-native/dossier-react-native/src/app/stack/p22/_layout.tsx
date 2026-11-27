import React, { createContext, useContext, useState } from 'react';
import { Stack } from 'expo-router';

type Tarea = { id: number; texto: string; completada: boolean };
type TareasContexto = {
  tareas: Tarea[];
  setTareas: React.Dispatch<React.SetStateAction<Tarea[]>>;
};

const TareasContext = createContext<TareasContexto | null>(null);

export function useTareas() {
  const valor = useContext(TareasContext);
  if (!valor) throw new Error('Falta el proveedor de tareas');
  return valor;
}

export default function RootLayout() {
  // Estado global de las tareas disponible para todas las pantallas hijas
  const [tareas, setTareas] = useState<Tarea[]>([
    { id: 1, texto: 'Configurar cabecera en Expo', completada: true },
    { id: 2, texto: 'Probar gestos en Android', completada: false },
  ]);

  return (
    <TareasContext.Provider value={{ tareas, setTareas }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E3A8A',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
          title: 'Somil',
          headerBackVisible: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="detalle" />
      </Stack>
    </TareasContext.Provider>
  );
}
