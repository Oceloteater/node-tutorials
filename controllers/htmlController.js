const parser = require('body-parser');
const fs = require('fs');

const urlencodedParser = parser.urlencoded({ extended: false });
const jsonParser = parser.json();

module.exports = (app) => {

    app.get('/', (req, res) => {
        //fs.createReadStream(__dirname + '/index.html').pipe(res);
        res.render('index');
    });

    app.get('/api/person/:id', (req, res) => {
        res.render('person', {
            id: req.params.id,
            name: req.query.name
        });
    });

    app.get('/api', (req, res) => {
        res.json({ name: 'This is a JSON object' });
    });

    app.post('/person', urlencodedParser, (req, res) => {
        res.send('Thank you!');
        console.log(req.body);
    });
};