import {useState, useEffect} from "react";

export const EffectHookTask = () => {

    const [value, setValue] = useState("");
    const [data, setData] = useState();

    useEffect(()=> {
        // console.log("Hello")
        fetch(`https://jsonplaceholder.typicode.com/${value}`)
            .then(response => response.json())
            .then(json => setData(JSON.stringify(json)))
    });

    const handleonclickpost = () => {
        setValue("posts/1");
    }

    const handleonclickcomment = () => {
        setValue("comments/1");
    }

    const handleonclickphotos = () => {
        setValue("photos/1");
    }

    const handleonclicknews = () => {
        setValue("todos/1");
    }

    return (
        <div>
            <p className="mt-5 text-center fs-1 fw-bolder">{data}</p>
            {/*<img src={data} alt="dummyImage" className="img-fluid col-12"/>*/}
            <div className="d-flex btn-group col-6 justify-content-center mt-5 gap-3 mx-auto row" role="group"
                 aria-label="Default button group">
                <button onClick={handleonclickpost} type="button" className="btn btn-primary col-2">Post</button>
                <button onClick={handleonclickcomment} type="button" className="btn btn-secondary col-2">Comments
                </button>
                <button onClick={handleonclickphotos} type="button" className="btn btn-info col-2">Photos</button>
                <button onClick={handleonclicknews} type="button" className="btn btn-success col-2">News</button>
            </div>
        </div>
    )
}