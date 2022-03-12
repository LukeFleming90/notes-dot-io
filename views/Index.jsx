const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-journal"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                        Notes.io
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pricing">Inspiration</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/user/login">
                                <button type="button" className="btn btn-outline-primary">Sign In</button>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src="https://c8.alamy.com/comp/2CBJ4PJ/manhattan-nyc-map-on-black-black-and-white-hand-drawn-illustration-icon-sign-for-print-and-labelling-2CBJ4PJ.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Looking for a Night Out? New to a City?</h1>
                            <p className="lead">Home.io is designed to provide users, whether they are locals, travelers, or transplants a truly local perspective of the nightlife created and maintained by the community. Currently serving the NYC area...</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a className="nav-link" href="/user/signup">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Sign Up</button>
                                </a>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Learn More
                                </button>
                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                ...
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                  
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index