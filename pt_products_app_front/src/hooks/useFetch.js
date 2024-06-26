import { useEffect, useState } from 'react';
import { instance } from '../config/config';

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        setIsLoading(true);
        const response = await instance.get(url);
        console.log("rresponse:::", response);
        setData(response.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, [url]);

    return {
        data,
        isLoading
    }
}