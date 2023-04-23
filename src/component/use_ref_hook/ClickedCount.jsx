import { useRef, useState } from "react"

export const ClickedCount = () => {

    const ref = useRef(0);
    const [value,setValue] = useState("");

    function handleonclick () {
        //increment by one when the button is clicked
        ref.current = ref.current + 1;

        //change h1 state
        setValue(ref.current);
    }

    return (
        <>
            <button onClick={handleonclick}>Click Me</button>
            <h1>Clicked Count : {value}</h1>
        </>
    )
}
