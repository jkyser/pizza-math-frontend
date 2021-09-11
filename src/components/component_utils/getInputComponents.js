import React from 'react';
import CalcScreenDivInput from '../CalcScreenDivInput';
import CalcScreenNormalInput from '../CalcScreenInputNormal';
import CalcScreenPowerInput from '../CalcScreenPowerInput';

/**
 * Returns the correct CalcScreen component given the input with a very large
 * switch statement (because I felt like using a switch)
 * 
 * returns null on a delete command for handling in other functions
 *  
 */
export default function getInputComponent(value, i) {
    switch(value) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '(':
        case ')':
        case '+':
        case '-':
        case '*':
        case '.':   // the decimal needs to be changed
        case '=':
        case 'x':
        case 'y':
            return <CalcScreenNormalInput key={i} input={value} />;
        case '/':
            return <CalcScreenDivInput key={i} input={value} />;
        case '^':
            return <CalcScreenPowerInput key={i} input={value} />;
        default:
            return;
    }
}