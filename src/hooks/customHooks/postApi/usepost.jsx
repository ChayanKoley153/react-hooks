import { useState } from "react";
import axios from 'axios'
import axiosInstance from "../../../../api/axios";

const usePostApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (payload) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post(url, 
                payload
            );

            if (!response.ok) {
                throw new Error("API request failed");
            }


            setData(response);
            return response;
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, postData };
};

export default usePostApi;