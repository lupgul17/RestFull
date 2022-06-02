'use strict'
const express=require('express');
const BoletoController=require('../controllers/boleto');
const api = express.Router();
api.get('/home-boleta',BoletoController.home);
api.get('/pruebas',BoletoController.pruebas);
api.get('/boletas',BoletoController.getBoletas);
api.get('/verificar/:Dpi/:token?',BoletoController.ExistCorre);



module.exports=api;