import React from 'react';
import './toggle-switch.styles.scss';

const Switch = () => {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Switch;