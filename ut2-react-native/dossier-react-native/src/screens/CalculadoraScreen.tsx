
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { TeclaCalculadora } from '../components/TeclaCalculadora';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

  const {
    numero,
    limpiar,
    construirNumero,
    positivoNegativo,
    calcularPorcentaje,
    botonDividir,
    botonMultiplicar,
    botonRestar,
    botonSumar,
    calcular,
  } = useCalculadora();

  return (
    <View style={styles.fondo}>
      <StatusBar barStyle="light-content" />

      <View style={styles.calculadoraContainer}>
        <Text
          style={styles.resultado}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {numero}
        </Text>

        <View style={styles.fila}>
          <TeclaCalculadora texto="AC" color="#9B9B9B" accion={limpiar} />
          <TeclaCalculadora texto="±" color="#9B9B9B" accion={positivoNegativo} />
          <TeclaCalculadora texto="%" color="#9B9B9B" accion={calcularPorcentaje} />
          <TeclaCalculadora texto="/" color="#FF9427" accion={botonDividir} />
        </View>

        <View style={styles.fila}>
          <TeclaCalculadora texto="7" accion={construirNumero} />
          <TeclaCalculadora texto="8" accion={construirNumero} />
          <TeclaCalculadora texto="9" accion={construirNumero} />
          <TeclaCalculadora texto="x" color="#FF9427" accion={botonMultiplicar} />
        </View>

        <View style={styles.fila}>
          <TeclaCalculadora texto="4" accion={construirNumero} />
          <TeclaCalculadora texto="5" accion={construirNumero} />
          <TeclaCalculadora texto="6" accion={construirNumero} />
          <TeclaCalculadora texto="-" color="#FF9427" accion={botonRestar} />
        </View>

        <View style={styles.fila}>
          <TeclaCalculadora texto="1" accion={construirNumero} />
          <TeclaCalculadora texto="2" accion={construirNumero} />
          <TeclaCalculadora texto="3" accion={construirNumero} />
          <TeclaCalculadora texto="+" color="#FF9427" accion={botonSumar} />
        </View>

        <View style={styles.fila}>
          <TeclaCalculadora texto="0" anchoDoble accion={construirNumero} />
          <TeclaCalculadora texto="." accion={construirNumero} />
          <TeclaCalculadora texto="=" color="#FF9427" accion={calcular} />
        </View>
      </View>
    </View>
  );
};

export default CalculadoraScreen;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },
  calculadoraContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  resultado: {
    color: '#FFFFFF',
    fontSize: 65,
    textAlign: 'right',
    marginBottom: 16,
    paddingHorizontal: 12,
    fontWeight: '300',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 14,
  },
});
