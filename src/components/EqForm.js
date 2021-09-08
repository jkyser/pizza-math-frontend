import React from 'react';
import EqInput from './EqInput';

const EqForm = ({attr}) => {
    return (
        <form>
            <EqInput changeHandler={attr.changeHandler} placeholder={attr.placeholder} value={attr.value} />
            <button type="submit">Solve</button>
        </form>
    );
}

export default EqForm;