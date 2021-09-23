import useLocalStorage from "./useLocalStorage";
import {useEffect} from "react";

function useRequest<T>(key: string, url: string): [T?] {
    const [localStorage, setLocalStorage] = useLocalStorage<T>(key);

    useEffect(() => {
        if (!localStorage) {
            const fetchData = async () => {
                const request = await fetch(url);
                return await request.json();
            }
            fetchData().then(data => setLocalStorage(data));
        }
    }, [localStorage]);

    return [localStorage];
}

export default useRequest
