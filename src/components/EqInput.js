import React from 'react';

// simple input element for typing in an equation
// tracks the value in the state given to it
const EqInput = ({changeHandler, placeholder, value}) => {
    return (
        <input onChange={changeHandler} placeholder={placeholder} value={value}/>
    );
}

export default EqInput;