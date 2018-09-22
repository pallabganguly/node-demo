const Note = require('../models/note.model.js');

exports.createNote = (req, res) => {
    // console.log(req.body.title+":"+req.body.body);
    if(req.body.body == null){
        return res.status(400).send({
            message: "The body cannot be empty!"
        });
    }
    const note = new Note({
        title: req.body.title || "Untitled Note",
        body: req.body.body
    });
    note.save().then(note => {
        res.send(note);
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
            message: err.message || "Some error occured while retrieving notes"
        });
    });
};

exports.getNoteById = (req, res) => {
    Note.findById(req.params.noteId).then(note => {
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note with Id"+ req.params.noteId + " was not found or does not exist"
            });
        }
        return res.status(500).send({
            message: "Some error occured while retrieving note "+ req.params.noteId
        });
    });
};

exports.updateNote = (req, res) => {

};

exports.deleteNote = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId).then(note => {
        if(note == null) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({
            message: "Note deleted successfully!"
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note with Id"+ req.params.noteId + " was not found or does not exist"
            });
        }
        return res.status(500).send({
            message: "Some error occured while retrieving note "+ req.params.noteId
        });
    });

};
