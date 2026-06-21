import express from 'express';

//const __dirname = import.meta.dirname;

const app = express();
const port = 3000;

import { articoliRouter } from './routes/articoli-router.js';

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(articoliRouter);

app.use(function(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.status(404).send('Pagina non trovata!');
})

app.listen(port, function(){
    console.log('Server is listening on port '+port);
})