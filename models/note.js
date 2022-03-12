const mongoose = require('./connection')

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////

const { Schema, model } = mongoose;

const noteSchema = new Schema (
    {
        title: String,
        body: String,
        username: String
    },
    { 
        timestamps: true 
    }
)

const Note = model('Note', noteSchema);

module.exports = Note;