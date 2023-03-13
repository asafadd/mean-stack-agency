var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');

//HTTP verbs POST, GET, PUT, DELETE

//Post /api/providers
router.post('/providers', mainController.create);

//Get /api/providers
router.get('/providers', mainController.readAll);

//Get /api/providers/123
router.get('/providers/:id', mainController.readOne);

//Put /api/providers/123
router.put('/providers/:id', mainController.update)

//Delete /api/providers/123
router.delete('/providers/:id', mainController.deleteOne);

//Delete /api/providers
router.delete('providers', mainController.deleteAll);

module.exports = router;