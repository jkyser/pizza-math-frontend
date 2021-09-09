import React from 'react';
import CalculatorKey from './CalculatorKey';

const Calculator = () => {
    // values for all the keys of the calculator
    // separated into their respective rows
    const calcKeyValuesOne = ['(', ')', '^', '/'];
    const calcKeyValuesTwo = ['7', '8', '9', 'x'];
    const calcKeyValuesThree = ['4', '5', '6', '-'];
    const calcKeyValuesFour = ['1', '2', '3', '+'];
    const calcKeyValuesFive = ['+/-', '0', '.', '='];
    const calcKeyValues = [calcKeyValuesOne, calcKeyValuesTwo, calcKeyValuesThree, calcKeyValuesFour, calcKeyValuesFive]

    return (
        <div className="col-md-12 col-lg-4 bg-light rounded shadow-sm border">
            {/*Screen portion of the calculator */}
            <div className="h-25 w-100 mt-3 p-2 bg-white rounded border">This is the screen</div>

            {/*Key portion of the calculator */}
            {calcKeyValues.map((row) => {
                return (
                    <div className="d-flex justify-content-around mt-4">
                        {row.map((value) => <CalculatorKey value={value} />)}
                    </div>
                );
            })}

            <div className="d-grid mt-3 mx-4">
                <button className="btn btn-secondary fw-bold border-2" type="button">SOLVE</button>
            </div>
        </div>
    );
}

export default Calculator;