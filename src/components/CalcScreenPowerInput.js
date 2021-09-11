import React from 'react';
import changeActiveScreenInput from './event_handlers/changeActiveScreenInput';

const CalcScreenPowerInput = ({input}) => {
    return (
        <div className="d-inline-block superscript" data-value={input} onClick={changeActiveScreenInput}>
            {input}
        </div>
    );
}

export default CalcScreenPowerInput;