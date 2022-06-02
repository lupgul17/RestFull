'use strict'
const express=require('express');
const UbicationController=require('../controllers/ubicacion');
const api = express.Router();
api.get('/home-ubication',UbicationController.home);
api.get('/pruebas-ubication',UbicationController.pruebas);
api.get('/ubicaciones',UbicationController.getUbicaciones);



module.exports=api;