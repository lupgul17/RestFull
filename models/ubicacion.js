'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//definir Schema
const UbicationSchema = Schema({
        municipio:String,
        codigo_postal:String,
        Departamento:String
});
module.exports=mongoose.model('Ubication',UbicationSchema);