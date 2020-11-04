import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// Dry Dont repet my self
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]

const renderButtons = (onClickNumber) => {
    // let number = 0
    // iterar del boton 1 al 0 (while, for, foreach)
    // <Button text={number.ToString()} clickHandler={onClickNumber} />

    return numbers.map(
        (number) => (
            <Button key={number} text={number.toString()} clickHandler={onClickNumber} />
        )
    )
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        {
            renderButtons(onClickNumber)
        }
    </section>
);

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired,
}

export default Numbers