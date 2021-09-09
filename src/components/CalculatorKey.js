import React from 'react';

const CalculatorKey = ({value}) => {
    return (
        <button className="btn btn-outline-secondary calc-keys fw-bold border-2" value={value}>
            {value}
        </button>
    );
}

export default CalculatorKey;