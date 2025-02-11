import {useState} from "react";
import  * as styles from './Button.module.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(count => count + 1);
    }

    return (
        <div className={styles.button}>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;