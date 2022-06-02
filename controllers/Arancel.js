const arancel = require('../models/Arancel');
var fs = require('fs');
var path= require('path');
const { findOne } = require('../models/Arancel');

//crear funciones
function home(req,res){
    res.status(200).send({
        message:'prueba de api banco modulo Arancel'
    })
}
function pruebas(req,res){
    console.log(req.body);
    res.status(200).send({
        message:'prueba de api red social en Mean'
    })
}
function getAranceles(req,res){
 arancel.find().exec((err,aran)=>{
    if(err) return  res.status(500).send({Message:'Error en la peticion'});
    if(aran){
        return res.status(200).send({
            aran
        });
    }    
 });
}

//exportar funciones
module.exports={
home,pruebas,getAranceles
}