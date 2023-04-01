import {useState} from "react";

export const EffectHookTask = () => {

    const [value,setValue] = useState();

    const handleonclickpost = () => {

    }

    const handleonclickcomment = () => {

    }

    const handleonclickphotos = () => {

    }

    const handleonclicknews = () => {

    }

    return (
        <div>
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