// *** Pasta onde vai ser colocada as Rotas ***

const { Router } = require('express');
const express = require('express');
const { ObjectId } = require('mongodb');
const router = express.Router();
const db = require("../DataBase/db");

router.use(express.json())

const checkBody = (req, res, next) => {
  // Verificar se ela existe um _id ,   para converter
  if ("_id" in req.body) {
    req.body._id = ObjectId(req.body._id)
  }
  next()
}
router.get('/', (req, res) => {
  res.send("Welcome to DB!")
})
/**
 *  @User DataBase
 */
router.get('/listUser', async (req, res) => {
  await db.connectToMongo()
  //  já recebe a list
  const results = await db.readUsers()
  console.log(results)
  res.send(results);
})
router.post('/addUser', async (req, res) => {
  await db.connectToMongo()
  const result = await db.createUser(req.body)
  res.send(result)
});
/**
 *  @Admin DataBase
 */
router.get('/listImoveis', async (req, res) => {
  await db.connectToMongo()
  //  já recebe a list
  const results = await db.readImoveis()
  console.log(results)
  res.send(results);
})
router.post('/addImoveis', async (req, res) => {
  await db.connectToMongo()
  const result = await db.createImoveis(req.body)
  res.send(result)
});



module.exports = router;