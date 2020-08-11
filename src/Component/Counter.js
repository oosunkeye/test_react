import React, { useState } from "react";

function Counter(pros){
    const [count, setCount] = useState(3);
    return (
        <div>
            <h1 onClick={()=>setCount(count * 12)}>increment</h1>
        <h1>{count}</h1>
        
        <h1 onClick={()=> setCount(count - 1)}>decrement</h1>
        </div>
    )
}

export default Counter;