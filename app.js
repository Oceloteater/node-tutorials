const express = require('express');
const apiController = require('./controllers/apiController');
const htmlController = require('./controllers/htmlController');

const app = express();
const port = process.env.PORT || 1337;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log('Request url: ' + req.url);
    next();
});

app.set('view engine', 'ejs');

apiController(app);
htmlController(app);

app.listen(port);