'use strict'

const express=require('express');
const bodyParser=require('body-parser');

const app=express();
//cargar rutas 
const persona_routes= require('../rutes/persona');
const ubication_routes = require('../rutes/ubicacion');
const boleta_routes=require('../rutes/boleto');
const Arancel_routes=require('../rutes/Arancel');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//cors
// configurar cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 
    next();
});
//rutes
app.use('/api',persona_routes);
app.use('/api',ubication_routes);
app.use('/api',boleta_routes);
app.use('/api',Arancel_routes);

//exportar
module.exports=app;