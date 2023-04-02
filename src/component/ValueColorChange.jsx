import {useState} from "react";

export const ValueColorChange = () => {
    const [value, setValue] = useState();

    const iterateLoop = () => {

    }

    return (
        <>
            <div className="mb-5">
                <h1 className="fs-1 fw-bolder font-monospace text-center mt-5">100</h1>
            </div>
            <div className="row col-12 m-0">
                <button type="button" className="btn btn-lg btn-primary col-2 mx-auto m-0">Start</button>
            </div>
        </>
    )
}