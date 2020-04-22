import React, {useReducer, useContext} from 'react';

const CalculationContext = React.createContext();

const initialState = {
    total: null,
    next: null,
    operation: null,
};
/**
 * reducer
 * @param {Object} state state
 * @param {Object} action action
 * @return {Object} new state
 */
function calculationReducer(state, action) {
    const actions = {
        'UPDATE': function() {
            return {
                ...state,
                [action.name]: action.value,
            };
        },
        'INIT': function() {
            return initialState;
        },
    };

    return actions[action.type]();
}

/**
 * Calculation Provider
 *
 * @param {{name: String}} props props {children, initialState}
 * @return {JSX} context
 */
// eslint-disable-next-line react/prop-types
function CalculationProvider({children, _initialState}) {
    const [state, dispatch] = useReducer(calculationReducer, _initialState ? _initialState : {});

    return (
        <CalculationContext.Provider value={{state, dispatch}}>
            {children}
        </CalculationContext.Provider>
    );
}

/**
 * useCalculationContext
 *
 * @return {context} context
 */
function useCalculationContext() {
    const context = useContext(CalculationContext);
    if (context === undefined) {
        throw new Error('useCalculationContext must be used within a CalculationProvider');
    }
    return context;
}

export {CalculationProvider, useCalculationContext};
