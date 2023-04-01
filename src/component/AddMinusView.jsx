export const AddMinusView = () => {

    let count = 0;

    const handleonclickadd = () => {
        count++;
    }

    const handleonclickminus = () => {
        count--;
    }

    return (
        <div className="overflow-hidden mt-5">
            <h1 className="fw-bolder text-center fs-1 font-monospace mt-5">{count}</h1>
            <br/>
            <br/>
            <br/>
            <div className="col row d-flex justify-content-center">
                <button onClick={handleonclickadd} className="btn btn-lg btn-primary col-2 me-3">+</button>
                <button onClick={handleonclickminus} className="btn btn-lg btn-secondary col-2">-</button>
            </div>
        </div>
    )
}