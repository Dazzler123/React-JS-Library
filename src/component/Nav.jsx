export const Nav = () => {
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
        </div>
    )
}