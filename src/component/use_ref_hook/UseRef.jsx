import React, { useEffect, useState, useRef } from 'react'

export const UseRef = () => {

    const [value,setValue] = useState("");
    const [count,setCount] = useState("");

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus();
        console.log("ddde");
        // setCount(count + 1);
    })

    return (
        <>
            <input type="text"
                onChange={e => setValue(e.target.value)}
                ref={inputRef} />
            {/* <h1>Rendered Count : {count}</h1> */}
        </>
    )
}
