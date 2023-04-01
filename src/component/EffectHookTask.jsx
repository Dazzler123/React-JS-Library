import {useState} from "react";

export const EffectHookTask = () => {

    const [value,setValue] = useState();

    const handleonclickpost = () => {
        setValue("Your Posts");
    }

    const handleonclickcomment = () => {
        setValue("Your Comments");
    }

    const handleonclickphotos = () => {
        setValue("Your Photos");
    }

    const handleonclicknews = () => {
        setValue("Your News");
    }

    return (
        <div>
            <h1 className="mt-5 text-center fs-1 fw-bolder">{value}</h1>
            <div className="d-flex btn-group col-6 justify-content-center mt-5 gap-5 mx-auto row" role="group"
                 aria-label="Default button group">
                <button onClick={handleonclickpost} type="button" className="btn btn-primary col-2">Post</button>
                <button onClick={handleonclickcomment} type="button" className="btn btn-secondary col-2">Comments</button>
                <button onClick={handleonclickphotos} type="button" className="btn btn-info col-2">Photos</button>
                <button onClick={handleonclicknews} type="button" className="btn btn-success col-2">News</button>
            </div>
        </div>
    )
}