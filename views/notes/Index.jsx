const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { notes } = this.props;
        return (
            <DefaultLayout>
                <a href="/user/logout"><button>Logout</button></a>
                <hr/>
                <div className="d-flex justify-content-center pt-5">
                    <a href="/notes/new">
                        <button type="button" class="btn btn-warning">
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
                            Create New Note
                        </button>
                    </a>
                </div>
                <div class="paper">
                    <div class="lines">
                        <div class="text" contenteditable spellCheck="false">
                            {
                                notes.map((note) => (
                                    <article>
                                        <a href={`/notes/${note._id}`}>
                                            <p style={{fontFamily: 'Permanent Marker'}}>
                                                {note.title}
                                            </p>
                                        </a>
                                    </article>
                                ))
                            }
                        </div>
                    </div>
                    <div class="holes hole-top"></div>
                    <div class="holes hole-middle"></div>
                    <div class="holes hole-bottom"></div>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index