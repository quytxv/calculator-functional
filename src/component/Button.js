import React from 'react';
import {useCalculationContext} from '../context/calculationContext';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './Button.css';

const Button = ({name, orange, wide}) => {
    const {state, dispatch} = useCalculationContext();

    // const calculate = (buttonName) => {
    //     if (buttonName === 'AC') {
    //         dispatch({type: 'INIT'});

    //         return;
    //     }

    //     if (isNumber(buttonName)) {
    //         // if (buttonName === '0' && state.next === '0') {
    //         //     return {};
    //         // }
    //         // If there is an operation, update next
    //         if (state.operation) {
    //             const next = (state.next ? state.next : '') + buttonName;
    //             dispatch({type: 'UPDATE', name: 'next', value: next});

    //             return;
    //         }
    //         // If there is no operation, update next and clear the value
    //         if (state.next) {
    //             const next = (state.next === '0' ? buttonName : state.next) + buttonName;
    //             dispatch({type: 'UPDATE', name: 'next', value: next});

    //             return;
    //         }

    //         dispatch({type: 'UPDATE', name: 'total', value: null});
    //         dispatch({type: 'UPDATE', name: 'next', value: buttonName});

    //         return;
    //     }

    //     if (buttonName === '%') {
    //         if (state.operation && state.next) {
    //             const result = operate(state.total, state.next, state.operation);
    //             const total = big(result).div(big('100')).toString();
    //             dispatch({type: 'UPDATE', name: 'total', value: total});
    //             dispatch({type: 'UPDATE', name: 'next', value: null});
    //             dispatch({type: 'UPDATE', name: 'operation', value: null});

    //             return;
    //         }
    //         if (state.next) {
    //             const next = big(state.next).div(big('100')).toString();
    //             dispatch({type: 'UPDATE', name: 'next', value: next});

    //             return;
    //         }

    //         return;
    //     }

    //     if (buttonName === '.') {
    //         if (state.next) {
    //             // ignore a . if the next number already has one
    //             if (state.next.includes('.')) {
    //                 return;
    //             }

    //             const next = state.next + '.';
    //             dispatch({type: 'UPDATE', name: 'next', value: next});

    //             return;
    //         }

    //         dispatch({type: 'UPDATE', name: 'next', value: '0.'});
    //         return;
    //     }

    //     if (buttonName === '=') {
    //         if (state.next && state.operation) {
    //             const total =operate(state.total, state.next, state.operation);
    //             dispatch({type: 'UPDATE', name: 'total', value: total});
    //             dispatch({type: 'UPDATE', name: 'next', value: null});
    //             dispatch({type: 'UPDATE', name: 'operation', value: null});

    //             return;
    //         } else {
    //             // '=' with no operation, nothing to do
    //             return;
    //         }
    //     }

    //     if (buttonName === '+/-') {
    //         if (state.next) {
    //             const next = (-1 * parseFloat(state.next)).toString();
    //             dispatch({type: 'UPDATE', name: 'next', value: next});

    //             return;
    //         }
    //         if (state.total) {
    //             const total = (-1 * parseFloat(state.total)).toString();
    //             dispatch({type: 'UPDATE', name: 'total', value: total});

    //             return;
    //         }
    //         return;
    //     }

    //     // Button must be an operation

    //     // When the user presses an operation button without having entered
    //     // a number first, do nothing.
    //     // if (!state.next && !state.total) {
    //     //   return {};
    //     // }

    //     // User pressed an operation button and there is an existing operation
    //     if (state.operation) {
    //         const total = operate(state.total, state.next, state.operation);
    //         dispatch({type: 'UPDATE', name: 'total', value: total});
    //         dispatch({type: 'UPDATE', name: 'next', value: null});
    //         dispatch({type: 'UPDATE', name: 'operation', value: buttonName});

    //         return;
    //     }

    //     // no operation yet, but the user typed one

    //     // The user hasn't typed a number yet, just save the operation
    //     if (!state.next) {
    //         dispatch({type: 'UPDATE', name: 'operation', value: buttonName});

    //         return;
    //     }

    //     // save the operation and shift 'next' into 'total'
    //     dispatch({type: 'UPDATE', name: 'total', value: state.next});
    //     dispatch({type: 'UPDATE', name: 'next', value: null});
    //     dispatch({type: 'UPDATE', name: 'operation', value: buttonName});

    //     return;
    // };

    const handleClick = () => {
        calculate(name, state, dispatch);
    };

    const className = [
        'component-button',
        orange ? 'orange' : '',
        wide ? 'wide' : '',
    ];

    return (
        <div className={className.join(' ').trim()}>
            <button onClick={handleClick}>{name}</button>
        </div>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
};

export default Button;
