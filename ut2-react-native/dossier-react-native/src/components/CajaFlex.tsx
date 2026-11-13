import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type Props = {
  nombre: string;
  bg?: string;
};

export default function CajaFlex({ nombre, bg = 'green' }: Props) {
  const [valorFlex, setValorFlex] = useState(0);

  return (
    <View style={[styles.caja, { backgroundColor: bg, flex: valorFlex }]}>
      <Text style={styles.texto}>
        {nombre} (flex: {valorFlex})
      </Text>
      <View style={styles.botones}>
        <Button
          title="-"
          color="#d9534f"
          onPress={() => setValorFlex((n) => Math.max(0, n - 1))}
        />
        <Button
          title="+"
          color="#2e7d32"
          onPress={() => setValorFlex((n) => n + 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    minHeight: 70,
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 8,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  botones: {
    flexDirection: 'row',
    gap: 10,
  },
});
