const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { note } = this.props;
        return (
            <DefaultLayout>
                <form action={`/notes/${note._id}?_method=PUT`} method="post">
                    {/* <fieldset>
                    <legend>Edit {note.title}</legend>
                    <label>
                        NAME:<input
                        type="text"
                        name="name"
                        placeholder="enter fruit name"
                        defaultValue={fruit.name}
                        />
                    </label>
                    <label>
                        COLOR:<input
                        type="text"
                        name="color"
                        placeholder="enter fruit name"
                        defaultValue={fruit.color}
                        />
                    </label>
                    <label>
                        READY TO EAT:{ this.props.fruit.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked />: <input type="checkbox" name="readyToEat"/> }
                    </label>
                    </fieldset>
                    <input type="submit" value={`Edit ${fruit.name}`} /> */}
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit