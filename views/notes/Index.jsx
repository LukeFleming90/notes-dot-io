const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { notes } = this.props;
        return (
            <DefaultLayout>
                <a href="/notes/new"><button>Create A New Note</button></a>
                <a href="/user/logout"><button>Logout</button></a>
                <div>
                    {
                        notes.map((note) => (
                            <article>
                                <a href={`/notes/${note._id}`}>
                                    <h2>
                                        {note.title}
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                </div>
                <div class="paper">
                    <div class="lines">
                        <div class="text" contenteditable spellCheck="false">
                            {
                                notes.map((note) => (
                                    <article>
                                        <a href={`/notes/${note._id}`}>
                                            <h2>
                                                {note.title}
                                            </h2>
                                        </a><br/>
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