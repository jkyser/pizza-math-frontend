import React, {useState, useEffect} from 'react';
import CalculatorKey from './CalculatorKey';

import getInputComponent from './component_utils/getInputComponents';
import submitLinearEquation from './component_utils/submitLinearEquation';
import changeActiveScreenInput from './event_handlers/changeActiveScreenInput';

const Calculator = () => {
    // values for all the keys of the calculator
    // separated into their respective rows
    const calcKeyValuesOne = ['(', ')', '^', '/', 'x'];
    const calcKeyValuesTwo = ['7', '8', '9', '*', 'y'];
    const calcKeyValuesThree = ['4', '5', '6', '-', 'var'];
    const calcKeyValuesFour = ['1', '2', '3', '+', 'n!'];
    const calcKeyValuesFive = ['del', '0', '.', '=', 'sqrt'];
    const calcKeyValues = [calcKeyValuesOne, calcKeyValuesTwo, calcKeyValuesThree, calcKeyValuesFour, calcKeyValuesFive]

    // state for the calculator
    const [ screen, setScreen ] = useState([]);

    /**
     * Handles the creating and adding a new input component to the calculator screen
     * or to the individual components that have been added to the screen in response 
     * user keyboard input
     * 
     */
    useEffect(() => {
        document.addEventListener('keydown', handleCalculatorInput);

        // clean up so that the component is updated correctly on every render
        return () => document.removeEventListener('keydown', handleCalculatorInput);
    });

    /**
     * Handles creating and adding a new input component to the calculator screen
     * or to the individual components that have been added to the screen if they
     * are actively selected (defined by having the class active-screen-input)
     * 
     */
    function handleCalculatorInput(e) {
        let value;
        if (e.key) {
            value = e.key;
        } else {
            value = e.target.value;
        }

        // check if we are dealing with a component and not the full screen
        // if we are, just append the new text (unless the command was to delete)
        let activeScreenList = Array.from(document.getElementsByClassName('active-screen-input'));
        if (activeScreenList.length === 1 && activeScreenList[0].id !== 'screen') {
            if (value === 'del' || value === 'Delete' || value === 'Backspace') {
                let postDelete = activeScreenList[0].textContent.slice(0, activeScreenList[0].textContent.length - 1);
                activeScreenList[0].textContent = postDelete;
            } else {
                activeScreenList[0].textContent += value;
            }

            // if the entire textContent of the node was deleted, we can delete this element by
            // updating the state
            if (activeScreenList[0].textContent === "") {
                document.getElementById('screen').click();  // make sure the screen is re-highlighted
                let newScreen = [...screen];
                newScreen.pop();
                setScreen(newScreen);
            }

        } else {
            // we are dealing with the full screen now
            let newScreen = [...screen];

            // if we are deleting the component, then we just need to pop off the end of the new screen array
            // otherwise, push it on to the end of the new screen array and update state
            if (value === 'del' || value === 'Delete' || value === 'Backspace') {
                newScreen.pop();
            } else {
                newScreen.push(value);
            }
            setScreen(newScreen)
        }
    }

    return (
        <div className="col-md-12 col-lg-3 bg-secondary rounded shadow border-dark">
            {/*Screen portion of the calculator */}
            <div className="h-25 w-100 mt-3 p-2 bg-white rounded border d-flex align-items-center active-screen-input"
                 id="screen"
                 onClick={changeActiveScreenInput}>
                {screen.map((value, i) => getInputComponent(value, i))}
            </div>

            {/*Key portion of the calculator */}
            <div className="h-75 d-flex flex-column justify-content-evenly">
                {calcKeyValues.map((row, i) => {
                    return (
                        <div key={i} className="d-flex justify-content-around">
                            {row.map((value, j) => <CalculatorKey key={j} value={value} handler={handleCalculatorInput} />)}
                        </div>
                    );
                })}

                <div className="d-grid mx-4">
                    <button className="btn btn-light fw-bold border-2" type="button" onClick={submitLinearEquation}>SOLVE</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;