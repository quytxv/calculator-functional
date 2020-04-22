import React from 'react';
import {useCalculationContext} from '../context/calculationContext';

import './Display.css';

const Display = () => {
    const {state} = useCalculationContext();
    return (
        <div className="component-display">
            <div>{ state.next || state.total || '0' }</div>
        </div>
    );
};
export default Display;
