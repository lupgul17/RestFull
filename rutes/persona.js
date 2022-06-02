'use strict'
const express=require('express');
const PersonaController=require('../controllers/persona');
const api = express.Router();
api.get('/home',PersonaController.home);
api.get('/pruebas',PersonaController.pruebas);
api.get('/personas',PersonaController.getPersonas);



module.exports=api;