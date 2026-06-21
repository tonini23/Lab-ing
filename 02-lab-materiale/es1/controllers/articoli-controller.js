import {connection} from '../utils/db.js';

async function allArticle(req, res) {
    connection.execute(
        'SELECT idarticolo, titoloarticolo, dataarticolo, anteprimaarticolo, imgarticolo, nome FROM articolo, autore WHERE autore = idautore', 
        [], 
        function(err, results, fields) {
            res.json(results);
        }
    )
}

async function lastNArticle(req, res) {
    connection.execute(
        `SELECT idarticolo, titoloarticolo, dataarticolo, anteprimaarticolo, imgarticolo, nome
         FROM autore, articolo WHERE idautore = autore 
         ORDER BY dataarticolo DESC LIMIT ?`, 
        [req.params.n], 
        function(err, results, fields) {
            res.json(results);
        }
    )
}

async function allArticleByCategoria(req, res) {
    connection.execute(
        `SELECT idarticolo, titoloarticolo, dataarticolo, anteprimaarticolo, imgarticolo, nome 
        FROM articolo, autore, articolo_ha_categoria WHERE idautore = autore AND idarticolo = articolo AND categoria = ?`, 
        [req.params.n], 
        function(err, results, fields) {
            res.json(results);
        }
    )
}

async function allArticleByAutore(req, res) {
    connection.execute(
        `SELECT idarticolo, titoloarticolo, dataarticolo, anteprimaarticolo, imgarticolo, nome FROM articolo, autore WHERE autore = idautore`, 
        [req.params.n], 
        function(err, results, fields) {
            res.json(results);
        }
    )
}

export { allArticle, lastNArticle, allArticleByCategoria, allArticleByAutore };