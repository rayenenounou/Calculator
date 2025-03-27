import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === 'Clear') {
            setInput('');
        } else if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch {
                setInput('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <h2>Nounou Calculator</h2>
            <input type="text" value={input} readOnly />
            <div className="result">{input}</div>
            <div className="buttons">
                {['7','8','9','/','4','5','6','*','1','2','3','-','0','+','=','Clear'].map((btn, i) => (
                    <button
                        key={i}
                        className={btn === '=' ? 'equal' : btn === 'Clear' ? 'clear' : ''}
                        onClick={() => handleClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Calculator;