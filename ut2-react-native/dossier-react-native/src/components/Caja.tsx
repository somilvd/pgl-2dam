import { StyleSheet, Text, View } from 'react-native';

type Props = { nombre?: string; bg?: string };

export default function Caja({ nombre = '', bg = 'green' }: Props) {
  return (
    <View style={[styles.caja, { backgroundColor: bg }]}>
      {nombre ? <Text>{nombre}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  caja: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
