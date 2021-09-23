import {useEffect, useState} from "react";

function useLocalStorage<T>(key: string): [T | undefined, ((value: T) => void)] {

    const getValue = () => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : undefined;
        } catch (error) {
            return undefined;
        }
    }

    const [localStorage, setValue] = useState(getValue);

    useEffect(() => {
        setValue(getValue)
    }, [key])

    const setLocalStorage = (value: T): void => {
        const newValue = value instanceof Function ? value(localStorage) : value
        setValue(newValue);
        window.localStorage.setItem(key, JSON.stringify(newValue));
    };
    return [localStorage, setLocalStorage];
}

export default useLocalStorage