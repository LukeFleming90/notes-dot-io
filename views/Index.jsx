const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <nav className="navbar navbar-light bg-light p-4">
                    <a className="navbar-brand d-flex flex-row" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="31"
                            height="31"
                            fill="currentColor"
                            className="bi bi-journal pb-1 mx-2 mt-3"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                        </svg>
                        <p className="pt-1"style={{fontSize: "31px"}}>Notes.io</p>
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link disabled pt-3" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link pt-3" href="/inspiration">Inspiration</a>
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
                            <img src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Need a Secure, Safe, Simple place to store your notes?</h1>
                            <p className="lead">Notes.io is a modern application that allows users to create and secure personal notes online. Plus our product ends in .io which means we are legit.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <a href="/user/signup"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Sign Up</button></a>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Learn More</button>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Failed Apps</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Notes.io has been a few different products in our short lifetime, click on the Inspiration tab to see our full journey from the early beginnings to where we are today.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index