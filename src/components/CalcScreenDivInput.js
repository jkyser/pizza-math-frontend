import React from 'react';
import changeActiveScreenInput from './event_handlers/changeActiveScreenInput';

const CalcScreenDivInput = () => {
    return (
        <div className="d-inline-block px-1">
            <div className="border-bottom border-dark" onClick={changeActiveScreenInput}>1</div>
            <div className="" onClick={changeActiveScreenInput}>1</div>
        </div>
    )
}

export default CalcScreenDivInput;