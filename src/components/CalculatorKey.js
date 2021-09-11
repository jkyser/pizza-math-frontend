import React from 'react';

const CalculatorKey = ({value, handler}) => {
    const buttonsToDisable = ['(', ')', '^', '/', '*', 'var', 'n!', '.', 'sqrt'];

    if (buttonsToDisable.includes(value)) {
        return (
            <button className="btn btn-light calc-keys fw-bold border-2" 
                    value={value}
                    onClick={handler}
                    disabled>
                {value}
            </button>
        );
    }

    return (
        <button className="btn btn-light calc-keys fw-bold border-2" 
                value={value}
                onClick={handler}>
            {value}
        </button>
    );
}

export default CalculatorKey;