import React, { useState } from 'react'
import Button from '../button';
import useMediaQuery from '../../hooks/useMediaQuery';

const Counter = () => {
  //estado contador
  const [counter, setCounter] = useState(0);
  // obtener el size para la resolucion mobile
  const isSmallScreen = useMediaQuery('(max-width: 599px)');

  //handle para incrementar +1
  const increment = () => {
    setCounter(counter + 1);
  }

  //handle para incrementar +10
  const superIncrement = () => {
    setCounter(counter + 10);
  }

  //handle para volver counter al estado inicial
  const reset = () => {
    setCounter(0);
  }

  //handle para incrementar el counter con un numero random del -20 al 20
  const random = () => {
    const randomNumber = Math.random() * (20 - (-20)) + (-20);
    setCounter(counter + Math.round(randomNumber));
  }

  //handle para decrementar -1
  const decrement = () => {
    setCounter(counter - 1);
  }

  //handle para decrementar -10
  const superDecrement = () => {
    setCounter(counter - 10);
  }

  return (
    <div style={{
      padding: "4rem",
      background: "#FAFAFA",
    }}>
      <h2 style={{
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "32px",
        color: "#171717",
      }}>
        Counter
      </h2>
      <p style={{
        fontSize: "18px",
        lineHeight: "32px",
        color: "#171717",
      }}>
        Descripción: El componente CounterComponent en React está diseñado para manejar un contador con varias funcionalidades de actualización. Utiliza el hook useState para gestionar el estado del contador, inicializándolo a cero. El componente define varias funciones para modificar el valor del contador: 'increment' incrementa el contador en 1, 'superIncrement' lo incrementa en 10, 'reset' reinicia el contador a 0, 'random' lo incrementa por un valor aleatorio entre -20 y 20, 'decrement' lo decrementa en 1, y 'superDecrement' lo decrementa en 10. Estas funciones son asignadas a botones mediante el atributo onClick, lo que permite que al hacer clic en cada botón, el contador se actualice según la función correspondiente. El valor actual del contador se muestra en un encabezado 'p', proporcionando una interfaz interactiva para el usuario.
      </p>
      <div style={{
        background: "white",
        boxShadow: "0px 4px 4px 0px #00000040",
        padding: "12px",
        maxWidth: "371px",
        borderRadius: "1rem",
        margin: "2rem auto auto",
        textAlign: "center",
      }}>
        <p style={{
          fontSize: "16px",
          lineHeight: "28px",
          color: "#525252",
        }}>
          Valor actual:
        </p>
        <p style={{
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "40px",
          color: "#6D28D9",
          margin: 0,
        }}>
          {counter}
        </p>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "307px",
          margin: "2rem auto auto",
          flexDirection: isSmallScreen ? "column" : "unset",
        }}>
          <Button
            onClick={increment}
            description={"+"}
          />
          <Button
            onClick={superIncrement}
            description={"++"}
          />
          <Button
            onClick={reset}
            description={"Reset"}
          />
          <Button
            onClick={random}
            description={"Random"}
          />
          <Button
            onClick={decrement}
            description={"-"}
          />
          <Button
            onClick={superDecrement}
            description={"--"}
          />
        </div>
      </div>
    </div>
  )
}

export default Counter;
