
const Persona = require('../models/persona');
var fs = require('fs');
var path= require('path');
const { findOne } = require('../models/persona');

//crear funciones
function home(req,res){
    res.status(200).send({
        message:'prueba de api banco modulo persona'
    })
}
function pruebas(req,res){
    console.log(req.body);
    res.status(200).send({
        message:'prueba de api red social en Mean'
    })
}
function getPersonas(req,res){
    Persona.find().exec((err,personas)=>{
       if(err) return  res.status(500).send({Message:'Error en la peticion'});
       if(personas){
           return res.status(200).send({
               personas
           });
       }    
    });
   }
//funcion de creacion de usuarios con condicionales para verificaion de que estos no existan actualmente 

//exportar funciones
module.exports={
home,pruebas,getPersonas
}