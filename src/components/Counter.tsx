import React, {useState} from 'react';
import style from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handlerClick = () => {
        setCount(count + 1);
    }

    return (
        <div className={style.btn}>
            <button onClick={handlerClick}>increment</button>
            <div>{count}</div>
        </div>
    );
};

export default Counter;