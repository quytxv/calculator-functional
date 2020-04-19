import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from './ButtonGroup';
import './ButtonPanel.css';

const buttonPanelList = {
    row1: {
        'AC': {},
        '+/-': {},
        '%': {},
        '÷': {orange: true},
    },
    row2: {
        '7': {},
        '8': {},
        '9': {},
        'x': {orange: true},
    },
    row3: {
        '4': {},
        '5': {},
        '6': {},
        '-': {orange: true},
    },
    row4: {
        '1': {},
        '2': {},
        '3': {},
        '+': {orange: true},
    },
    row5: {
        '0': {wide: true},
        '.': {},
        '=': {orange: true},
    },
};

const ButtonPanel = ({clickHandler}) => {
    const handleClick = (buttonName) => {
        clickHandler(buttonName);
    };

    return (
        <div className="component-button-panel">
            {
                Object.keys(buttonPanelList).map((groupKey) => {
                    const buttonList = buttonPanelList[groupKey];
                    return <ButtonGroup
                        key={groupKey}
                        groupName={groupKey}
                        buttonList={buttonList}
                        clickHandler={handleClick}
                    />;
                })
            }
        </div>
    );
};
ButtonPanel.propTypes = {
    clickHandler: PropTypes.func,
};

export default ButtonPanel;
