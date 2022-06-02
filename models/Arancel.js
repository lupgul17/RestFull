'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//definir Schema
const ArancelSchema = Schema({
        Description:String,
        Precio:String,
        Estado:String
});
module.exports=mongoose.model('Arancel',ArancelSchema);