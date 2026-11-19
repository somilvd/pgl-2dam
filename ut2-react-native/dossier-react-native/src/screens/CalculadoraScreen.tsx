import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import { TeclaCalculadora } from '../components/TeclaCalculadora';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const CalculadoraScreen = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const ultimaOperacion = useRef<Operadores | undefined>(undefined);

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
    ultimaOperacion.current = undefined;
  };

  const construirNumero = (numeroTexto: string) => {
    if (numero === 'Error') {
      setNumero(numeroTexto === '.' ? '0.' : numeroTexto);
      return;
    }

    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numero.startsWith('-') ? '-' + numeroTexto : numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero === '0' || numero === 'Error') return;
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const calcularPorcentaje = () => {
    const valor = Number(numero);
    if (!isNaN(valor)) {
      setNumero(`${valor / 100}`);
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero === 'Error') return;
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const botonDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const botonMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const botonRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const botonSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    if (ultimaOperacion.current === undefined || isNaN(num1) || isNaN(num2)) return;

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        if (num1 === 0) {
          setNumero('Error');
        } else {
          setNumero(`${num2 / num1}`);
        }
        break;
    }

    setNumeroAnterior('0');
    ultimaOperacion.current = undefined;
  };

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
