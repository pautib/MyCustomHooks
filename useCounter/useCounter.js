import {useState} from "react";

export const useCounter = (initialValue = 10, incrementValue = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = ( value = incrementValue ) => setCounter((current) => current + value );
    const decrement = (value = incrementValue ) => setCounter((current) => current - value );
    const reset = () => setCounter(initialValue);

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}