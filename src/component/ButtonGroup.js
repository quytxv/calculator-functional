import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonGroup = ({groupName, buttonList}) => {
    return (
        <div key={groupName}>
            {
                Object.keys(buttonList).map((buttonName) => {
                    const {orange = false, wide = false} = buttonList[buttonName];
                    return <Button
                        key={buttonName}
                        name={buttonName}
                        // clickHandler={handleClick}
                        orange={orange}
                        wide={wide}
                    />;
                })
            }
        </div>
    );
};

ButtonGroup.propTypes = {
    groupName: PropTypes.string.isRequired,
    buttonList: PropTypes.object.isRequired,
};

export default ButtonGroup;
