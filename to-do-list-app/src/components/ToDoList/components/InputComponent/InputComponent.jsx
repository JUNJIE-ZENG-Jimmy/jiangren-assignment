import React, { useState } from 'react';
import './InputComponent.css';

const InputComponent = ({ onInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            onInputChange(inputValue);
            setInputValue('');
        }
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="input-field"
            placeholder="Enter a task..."
        />
    );
};

export default InputComponent;