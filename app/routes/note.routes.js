module.exports = function(app, db) {
    // just one service route
    app.post('/notes', (req, res) => {
        res.send("Hello, world!")
        console.log(req.body)
    });

    app.get('/', (req, res) => {
        res.json({'message': 'Welcome to the home page of the application!'})
        console.log('In GET')
    });
};