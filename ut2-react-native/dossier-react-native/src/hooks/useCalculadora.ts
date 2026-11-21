
import { useState, useRef } from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
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

  return {
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
  };
};

export default useCalculadora;
