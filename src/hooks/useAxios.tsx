import { useState, useEffect } from 'react';
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const useAxios = (axiosParams: AxiosRequestConfig<object>) => {
    const [response, setResponse] = useState(undefined);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (params: AxiosRequestConfig<object>) => {
      try {
       const result = await axios.request(params);
       setResponse(result.data);
       } catch( error ) {
        if (error instanceof Error) {
            setError(error.message);            
        }
       } finally {
         setLoading(false);
       }
    };

    useEffect(() => {
        fetchData(axiosParams);
    }, []); // execute once only

    return { response, error, loading };
};