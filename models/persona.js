'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//definir Schema
const PersonaSchema = Schema({
        name1:String,
        name2:String,
        surname1:String,
        surname2:String,
        Dpi:String
});
module.exports=mongoose.model('Persona',PersonaSchema);
