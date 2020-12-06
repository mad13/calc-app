import React, { FC } from 'react'
import './Button.css'

// se define la firma de la funcion, 
// parametros en orden con tipos y tipo de retorno
export type ButtonClickHandler = (text: string) => void

type Props = {
    type?: string,
    text: string,
    clickHandler: ButtonClickHandler
}

const Button: FC<Props> = ({ type, text, clickHandler }) =>
    (
        <button className={type} onClick={() => clickHandler(text)}>
            <span>{text}</span>
        </button >
    );


export default Button