import express from "express";

import * as articoliController from "../controllers/articoli-controller.js";

const router = express.Router();

router.get("/api/articoli", articoliController.allArticle);
router.get("/api/articoli/:n", articoliController.lastNArticle);
router.get("/api/articoli/categoria/:n", articoliController.allArticleByCategoria);
router.get("/api/articolo/:id", articoliController.allArticleByAutore);
router.get("/api/categorie", articoliController.allArticle);
router.get("/api/categoria/:id", articoliController.allArticle);
router.get("/api/autori", articoliController.allArticle);
router.get("/api/autore/:id", articoliController.allArticle);


export { router as articoliRouter };

