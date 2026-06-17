import express from 'express';

import data from './colors.json' with {type: 'json'};

const __dirname = import.meta.dirname;

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello World!');
})

app.get('/colors', function(req, res) {
    res.json(data);
})

app.get('/contacts', function(req, res) {
    //res.sendFile(__dirname + '/www/contacts.html');
    res.sendFile(__dirname + '/public/contacts-no-css.html');
})

app.post('/showdata', function(req, res) {
    res.send(`
        <p>${req.body.firstname}</p>
        <p>${req.body.lastname}</p>
        <p>${req.body.country}</p>
        <p>${req.body.subject}</p>
        `);
})

app.get('/numero/:n', function(req, res) {
    res.send('<p> ' + req.params.n + ' </p>');
})

app.use(function(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.status(404).send('<b>Pagina non trovata!</b>');
})

app.listen(port, function(){
    console.log('Server is listening on port '+port);
})