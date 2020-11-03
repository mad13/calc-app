import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ value }) => {

    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
};

Result.propTypes = {
    value: PropTypes.string.isRequired,
    resultHandlerFunction: PropTypes.func,
}

Result.defaultProps = {
    value: "0"
}


export default Result