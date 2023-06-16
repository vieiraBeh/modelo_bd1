const express = require('express');
const db = require('./conn.js');

const router = express.Router();

// Registrar um novo resultado
router.post("/", async (req, res) => {
    db.pontuacao.insertMany([
        {nome: "Benda", pontos: 15},
        {nome: "Luane", pontos: 10},
        {nome: "Talita", pontos: 20}
    ]);
});


// Pegar os 10 melhores resultados
router.get("/", async (req, res) => {
    db.pontuação.find().sort({
        pontos: -1
    }).limit(10)
});

module.exports = router;
