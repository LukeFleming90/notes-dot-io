const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <nav className="navbar navbar-light bg-light p-3">
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
                            <a className="nav-link" href="/notes">
                                <button type="button" className="btn btn-outline-warning">View Notes</button>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/user/logout">
                                <button type="button" className="btn btn-outline-danger">Sign Out</button>
                            </a>
                        </li>
                    </ul>
                </nav>
                <form action="/notes" method="post" className="mt-4 formhorizontal">
                    <div class="form-group row mb-3">
                        <div className='col-sm-10'>
                            <h4>Create New Note</h4>
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <div className='col-sm-10'>
                            <input type="text" name="title" placeholder="Enter Note Title" />
                        </div>
                    </div>
                    <div class="form-group row mb-3">
                        <div className='col-sm-10'>
                            <textarea type="text" name="body" placeholder="Enter Note Details" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Create Note" className='btn btn-outline-success'/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New