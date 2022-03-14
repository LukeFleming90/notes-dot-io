const React = require('react');
const DefaultLayout = require('../Default.jsx');
const moment = require('moment');

class Show extends React.Component {
    render() {
        const { note } = this.props
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
                <div className="d-flex justify-content-center pt-5">
                    <a href={`/notes/${ note._id }/edit`}>
                        <button type="button" class="btn btn-outline-success btn-md btn-block mx-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-pen p-1"
                                viewBox="0 0 16 16"
                            >
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                            </svg>
                            Edit Note
                        </button>
                    </a>
                    <form action={`/notes/${ note._id }?_method=DELETE`} method="POST">
                        <input type="submit" className='btn btn-outline-danger btn-md btn-block mx-2' value="Delete" />
                    </form>
                </div>
                <div className="paper">
                    <div className="lines">
                        <div className="text" contenteditable spellCheck="false">
                            <p> {note.title} - {moment(note.createdAt).format('MMMM Do YYYY')}</p>
                            <p>{note.body}</p>
                            <p>By {note.username}</p>
                        </div>
                    </div>
                    <div className="holes hole-top"></div>
                    <div className="holes hole-middle"></div>
                    <div className="holes hole-bottom"></div>
                </div>
          </DefaultLayout>
        )
    }
}

module.exports = Show