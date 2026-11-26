import { Stack } from 'expo-router';

export default function P21Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Primera Pantalla' }} />
      <Stack.Screen name="segunda" options={{ title: 'Segunda Pantalla' }} />
      <Stack.Screen name="tercera" options={{ title: 'Tercera Pantalla' }} />
    </Stack>
  );
}
