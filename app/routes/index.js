// master route file
const noteRoutes = require('./note.routes');

module.exports = function(app, db) {
    // different service routes go here
    noteRoutes(app, db);
}