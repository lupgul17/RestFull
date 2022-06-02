'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//definir Schema
const pagoBoletaSchema = new Schema({
    Correlativo:String,
    Fecha_pago:String,
    Fecha_modificacion:String,
    Arancel:{type:Schema.ObjectId,ref:'Arancel'}
})
const BoletaSchema = Schema({
        noSerie:String,
        Fecha_bole:String,
        codigo_Jurisdiccional:String,
        pagoBoleta:pagoBoletaSchema,
        persona: {type:Schema.ObjectId,ref:'Persona'},
        ubicaion:{type:Schema.ObjectId,ref:'Ubication'}
});
module.exports=mongoose.model('Boleta',BoletaSchema);