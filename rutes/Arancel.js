'use strict'
const express=require('express');
const ArancelController=require('../controllers/Arancel');
const api = express.Router();
api.get('/home-arancel',ArancelController.home);
api.get('/pruebas',ArancelController.pruebas);
api.get('/aranceles',ArancelController.getAranceles);



module.exports=api;