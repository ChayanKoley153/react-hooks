import React, { useState } from "react";
import { DataContext } from "./dataContext";

const DataProvider = ({ children }) => {
    const [data, setData] = useState();

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;