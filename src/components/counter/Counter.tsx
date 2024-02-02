import React, {useState} from 'react';
import './Counter.scss';
const Counter = () => {
    const [count, setCount] = useState(0);

    const handlerClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handlerClick}>increment</button>
            <div>{count}</div>
        </div>
    );
};

export default Counter;