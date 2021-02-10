module.exports = (app) => {

    app.get('/api/person/:id', (req, res) => {
        res.json({ firstName: 'Another', lastName: 'Test' });
        console.log(req.body);
    });

    app.post('/api/person', (req, res) => {
        res.send('What up');
    });

    app.delete('/api/person/:id', (req, res) => {
        // code
    });

};
