import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import {CalculationProvider} from '../context/calculationContext';
import './App.css';

const initialState = {
    total: null,
    next: null,
    operation: null,
};

const App = () => {
    return (
        <div className="component-app">
            <CalculationProvider initialState={initialState}>
                <Display/>
                <ButtonPanel/>
            </CalculationProvider>
        </div>
    );
};

export default App;
