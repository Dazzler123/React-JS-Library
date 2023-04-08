import {Child} from "./Child";
import {useState} from "react";

export const Parent = () => {
    const [text, setText] = useState("My Text");
    // const fromChild = (fromText) => {
    //     setText(fromText);
    // };

    function fromChild(fromText){
        setText(fromText);
    }

    return (
        <div>
            <h1>{text}</h1>
            <Child fromChild={fromChild}/>
        </div>
    )
}