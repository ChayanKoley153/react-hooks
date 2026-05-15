import { useEffect, useState, useContext } from "react";
import axiosInstance from "../../api/axios";
import { DataContext } from "./dataContext";


function useList(url) {
    const { data, setData } = useContext(DataContext);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axiosInstance.get(url);

                setData(res.data.users); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useList;
