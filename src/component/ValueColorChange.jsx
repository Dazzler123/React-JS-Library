import {useState} from "react";

export const ValueColorChange = () => {
    const [value, setValue] = useState(0);

    function iterateLoop() {
        setInterval(() => {
            setValue(value + 1)
            console.log(value + 1);
        }, 1000);
    }

    return (
        <>
            <div className="mb-5">
                <h1 className="fs-1 fw-bolder font-monospace text-center mt-5">{value}</h1>
            </div>
            <div className="row col-12 m-0">
                <button type="button" className="btn btn-lg btn-primary col-2 mx-auto m-0"
                        onClick={iterateLoop}>Start
                </button>
            </div>
        </>
    )
}