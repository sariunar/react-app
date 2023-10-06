import React from "react";
import "./input.css";

export const Input = ({ name, value, error, label, onChange }) => {
    const handleChange = (event) => {
        const { name, value } = event.currentTarget; //currentTarget текущий инпут

        onChange({ name, value });
    };

    return (
        <div className="input">
            <label className="input__label">{label}</label>
            <input type="text" name={name} value={value} onChange={handleChange} className={error ? 'errorInput' : ''} />
        </div>
    );
};