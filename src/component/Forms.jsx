export const Forms = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Forms</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
                        <button type="button" className="btn btn-primary me-3">Form</button>
                        <button type="button" className="btn btn-secondary">Other</button>
                    </div>
                </div>
            </nav>
            <br/>
            <br/>
            <form className="col-8 mx-auto">
                <label htmlFor="exampleInputName1" className="form-label font-monospace">Name</label>
                <input type="email" className="form-control" id="exampleInputName1"
                       aria-describedby="emailHelp"></input>
                <label htmlFor="exampleInputAddress1" className="form-label font-monospace">Address</label>
                <input type="email" className="form-control" id="exampleInputAddress1"
                       aria-describedby="emailHelp"></input>
                <label htmlFor="exampleInputEmail1" className="form-label font-monospace">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp"></input>
                <label htmlFor="exampleInputAge1" className="form-label font-monospace">Age</label>
                <input type="email" className="form-control" id="exampleInputAge1"
                       aria-describedby="emailHelp"></input>
                <br/>
                <br/>
                <div className="btn-group-vertical col-6 mx-auto btn-group-lg" role="group" aria-label="Vertical button group">
                    <button type="button" className="btn btn-success mb-3">Save</button>
                    <button type="button" className="btn btn-secondary">Reset</button>
                </div>
            </form>
        </div>
    )
}