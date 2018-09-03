module.exports = function(app, db) {
    // just one service route
    const notes = require('../controllers/note.controller.js');

    app.post('/notes', notes.createNode); //function in controller

    app.get('/notes', notes.getAllNotes);

    app.get('/notes:noteId', notes.getNoteById);

    app.put('/notes:noteId', notes.updateNote);

    app.delete('/notes:noteId', notes.deleteNote);

    app.get('/', (req, res) => {
        console.log('GET request');
    });
};