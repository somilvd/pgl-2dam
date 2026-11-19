import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  texto: string;
  color?: '#2D2D2D' | '#9B9B9B' | '#FF9427';
  anchoDoble?: boolean;
  accion: (textoNumero: string) => void;
}

export const TeclaCalculadora = ({
  texto,
  color = '#2D2D2D',
  anchoDoble = false,
  accion,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => accion(texto)}
      style={[
        styles.boton,
        {
          backgroundColor: color,
          width: anchoDoble ? 168 : 76,
        },
      ]}
    >
      <Text
        style={[
          styles.botonTexto,
          {
            color: color === '#9B9B9B' ? '#000000' : '#FFFFFF',
            textAlign: anchoDoble ? 'left' : 'center',
            paddingLeft: anchoDoble ? 28 : 0,
          },
        ]}
      >
        {texto}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    height: 76,
    borderRadius: 38,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  botonTexto: {
    fontSize: 30,
    fontWeight: '400',
  },
});
