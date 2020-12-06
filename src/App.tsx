// importación
import React, { useState, FC } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

// generación de la función del componente
const App: FC = () => {

    debugger
    // array desructiring
    // const [{ stack, numberSem }, setAllValues] = useState({ stack: '0', numberSem: true });

    const [stack, setStack] = useState("");
    // const items = words(stack, /[^+^-^*/]+/g);
    // // Lo que ejecuta la función
    // let value = items.length > 0 ? items[items.length - 1] : "0";
    return (<main className="react-calculator">
        <Result value={stack} />

        <Numbers onClickNumber={(number) => {

            // solo permito seguir si esta encendido el semaforo de numeros
            // if (!numberSem) {
            //     return;
            // }

            debugger;

            const ultimoCaracter = stack.substring(stack.length - 1, stack.length);

            // if (number == 0) {
            //     // evitar division por cero
            //     if (ultimoCaracter == '/') {
            //         return setStack(`${stack}`.toString());
            //     }
            // }

            // si el último es un 0 y el anteoultimo es una operacion entonces, 
            // estas ante un doble cero -  09 -08
            const anteUltimoCaracter = stack.substring(stack.length - 2, stack.length - 1);
            // evitar el doble 0 y una operacion anterior
            if (ultimoCaracter == '0') {
                if (anteUltimoCaracter == undefined || anteUltimoCaracter == "") {
                    const newStack = stack.substring(0, stack.length - 1);
                    return setStack(`${newStack}${number}`.toString());
                }
                else if (Number.isNaN(anteUltimoCaracter)) {
                    return setStack(`${stack}`.toString());
                }
            }

            return setStack(`${stack}${number}`.toString())
        }} />

        <Functions
            onContentClear={(clear) => {
                return setStack("0".toString());
            }}

            onDelete={(del) => {

                if (stack.length > 0) {
                    const newStack = stack.substring(0, stack.length - 1);
                    setStack(newStack.toString());
                }
            }}
        />
        <MathOperations
            onClickOperation={operation => {
                setStack(`${stack}${operation}`.toString());
            }}

            onClickEqual={operation => {
                setStack(eval(`${stack}`).toString());
            }}
        />
    </main>);
}

// exportación
export default App