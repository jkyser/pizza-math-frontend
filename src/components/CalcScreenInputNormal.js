import React from 'react';
import changeActiveScreenInput from './event_handlers/changeActiveScreenInput';

/**
 * Component to style a normal text input to the calculator for displaying
 *  
 */

const CalcScreenNormalInput = ({input}) => {
    return (
        <div className="d-inline-block fs-3" data-value={input} onClick={changeActiveScreenInput}>
            {input}
        </div>
    )
}

export default CalcScreenNormalInput;