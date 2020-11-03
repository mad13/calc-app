// importación
import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

// generación de la función del componente
const App = () => {

    debugger
    // array desructiring
    const [{ stack, numberSem }, setAllValues] = useState({ stack: '0', numberSem: true });

    // const [ stack, setStack] = useState(""); 
    // const items = words(stack, /[^+^-^*/]+/g);
    // // Lo que ejecuta la función
    // console.log("renderizacion de apps", items)
    // let value = items.length > 0 ? items[items.length - 1] : "0";
    return (<main className="react-calculator">
        <Result value={stack} />

        <Numbers onClickNumber={(number) => {

            // solo permito seguir si esta encendido el semaforo de numeros
            if (!numberSem) {
                return;
            }

            debugger;

            const ultimoCaracter = stack.substring(stack.length - 1, stack.length);

            if (number == 0) {
                // evitar division por cero
                if (ultimoCaracter == '/') {
                    return setAllValues({ stack: `${stack}`.toString(), numberSem: true });
                }
            }

            // si el último es un 0 y el anteoultimo es una operacion entonces, 
            // estas ante un doble cero -  09 -08
            const anteUltimoCaracter = stack.substring(stack.length - 2, stack.length - 1);
            // evitar el doble 0 y una operacion anterior
            if (ultimoCaracter == '0') {
                if (anteUltimoCaracter == undefined || anteUltimoCaracter == "") {
                    const newStack = stack.substring(0, stack.length - 1);
                    return setAllValues({ stack: `${newStack}${number}`.toString(), numberSem: true });
                }
                else if (Number.isNaN(anteUltimoCaracter)) {
                    return setAllValues({ stack: `${stack}`.toString(), numberSem: true });
                }
            }

            return setAllValues({ stack: `${stack}${number}`.toString(), numberSem: true })
        }} />

        <Functions
            onContentClear={(clear) => {
                return setAllValues({ stack: "0".toString(), numberSem: true });
            }}

            onDelete={(del) => {

                if (stack.length > 0) {
                    const newStack = stack.substring(0, stack.length - 1);
                    setAllValues({ stack: newStack.toString(), numberSem: true });
                }
            }}
        />
        <MathOperations
            onClickOperation={operation => {
                setAllValues({ stack: `${stack}${operation}`.toString(), numberSem: true });
            }}

            onClickEqual={operation => {
                setAllValues({ stack: eval(`${stack}`).toString(), numberSem: false });
            }}
        />
    </main>);
}

// exportación
export default App