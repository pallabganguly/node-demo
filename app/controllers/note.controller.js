const Note = require('../models/note.model.js');

exports.createNote = (req, res) => {
    if(req.body.content == null){
        return res.status(400).send({
            message: "The body cannot be empty!"
        });
    }
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    });
    note.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: "Some error occured while saving your note"
        });
    });

};

exports.getAllNotes = (req, res) => {
    Note.find().then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: "Some error occured while retrieving notes"
        });
    });

};

exports.getNoteById = (req, res) => {

};

exports.updateNote = (req, res) => {

};

exports.deleteNote = (req, res) => {

};
