const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/notes" method="post">
                    <fieldset>
                        <legend>Create a New Note</legend>
                        <label>
                            Title:<input type="text" name="title" placeholder="enter note title" />
                        </label>
                        <label>
                            Body:<input type="text" name="body" placeholder="enter note details" />
                        </label>
                    </fieldset>
                    <input type="submit" value="create New note" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New