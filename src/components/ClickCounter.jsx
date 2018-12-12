import React from 'react';
import { useState, useEffect } from 'react';
import RubberBand from 'react-reveal/RubberBand';
import Icons from './Icons';

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Click ${10 - count} times more to win`;
    });

    const counter = () => {
        return (
            <div className="counter" id="counter">
                <div className="count">Count</div>
                <div className="count-number">{count}</div>
                <button className="counter-button" onClick={() => setCount(count + 1)}>
                    Click here
                </button>
            </div>
        )
    }
    const win = () => {
        return (
            <div className="win">
                <RubberBand>
                    <div className="uwin">You Win!</div>
                </RubberBand>
                <Icons/>
            </div>
        )
    }
    

    return (count === 10 ? win() : counter());
}

export default ClickCounter;