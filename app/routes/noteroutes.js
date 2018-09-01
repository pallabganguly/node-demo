module.exports = function(app, db) {
    // just one service route
    app.post('/notes', (req, res) => {
        res.send("Hello, world!")
    });
};