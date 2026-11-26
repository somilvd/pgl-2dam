import { Stack } from 'expo-router';

export default function P20Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Página Principal' }} />
      <Stack.Screen name="detalle" options={{ title: 'Segunda Pantalla' }} />
    </Stack>
  );
}
