import { useEffect, useState } from "react";
import { Employee } from '../types';

const useFetch = (url: string) => {
    const [data, setData] = useState<Employee[]>();
    const [loading, setLoading] = useState<boolean>(true);
    const [errorMEssage, setErrorMessage] = useState<string>();

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Could not fetch Employees!');
                return res.json();
            })
            .then(data => {
                setLoading(false);
                setData(data);
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage(error.message);
            })
    }, [url]);


    return {
        data,
        loading,
        errorMEssage
    }
}

export default useFetch;