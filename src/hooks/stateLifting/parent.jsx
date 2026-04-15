import { useCallback, useState } from "react";
import Child from "./child";

const Parent1 = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(prev => prev + 1);
    },[count]);

    return (
        <div>
            <Child
                handleIncrement={handleIncrement}
            />
            <p>Count: {count}</p>            
        </div>
    );
}

export default Parent1;