import React, { FC } from 'react'
import Button from './Button'
import { ButtonClickHandler } from './Button'
// Dry Dont repet my self
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = (onClickNumber: ButtonClickHandler) => {
    // let number = 0
    // iterar del boton 1 al 0 (while, for, foreach)
    // <Button text={number.ToString()} clickHandler={onClickNumber} />

    return numbers.map(
        (numero: number) => (
            <Button key={numero} text={numero.toString()} clickHandler={onClickNumber} />
        )
    )
}

type Props = {
    onClickNumber: ButtonClickHandler
}

const Numbers: FC<Props> = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
);


export default Numbers