import express from 'express';

const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('Hello World!');
})

app.use(function(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.status(404).send('<b>Pagina non trovata!</b>');
})

app.listen(port, function(){
    console.log('Server is listening on port '+port);
})