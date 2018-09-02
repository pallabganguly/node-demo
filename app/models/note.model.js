const mongoose = require('mongoose');

const NoteModel = mongoose.Schema({
    title: String,
    body: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteModel);