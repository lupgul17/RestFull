const Ubicaciones = require('../models/ubicacion');
var fs = require('fs');
var path= require('path');
const { findOne } = require('../models/ubicacion');

//crear funciones
function home(req,res){
    res.status(200).send({
        message:'prueba de api banco modulo ubicacion'
    })
}
function pruebas(req,res){
    console.log(req.body);
    res.status(200).send({
        message:'prueba de api red social en Mean'
    })
}
function getUbicaciones(req,res){
    Ubicaciones.find().exec((err,ubic)=>{
       if(err) return  res.status(500).send({Message:'Error en la peticion'});
       if(ubic){
           return res.status(200).send({
               ubic
           });
       }    
    });
   }
//funcion de creacion de usuarios con condicionales para verificaion de que estos no existan actualmente 

//exportar funciones
module.exports={
home,pruebas,getUbicaciones
}