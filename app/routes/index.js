// master route file
const noteRoutes = require('./noteroutes');

module.exports = function(app, db) {
    // different service routes go here
    noteRoutes(app, db);
}