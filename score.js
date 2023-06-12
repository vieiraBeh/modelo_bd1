const express = require('express');
const db  = require('./con.js');

const router = express.Router();

// Registrar um novo resultado
router.post("/", async (req, res) => {
  let collection = await db.collection("score");
  let result = await collection.insertOne(req.body);
  res.send(result).status(204);
});


// Pegar os 10 melhores resultados
router.get("/", async (req, res) => {
  let collection = await db.collection("score");
  let resultado = await collection.find().sort({ pontos: -1 }).limit(10).toArray();
  res.send(resultado).status(200);
});

module.exports = router;