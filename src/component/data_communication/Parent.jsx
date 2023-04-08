import {Child} from "./Child";
import {useState} from "react";

export const Parent = () => {
    const [text,setText] = useState();

    return (
        <div>
            <h1>{text}</h1>
            <Child fromChild={fromChild}/>
        </div>
    )
}