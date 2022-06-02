const Boletas = require('../models/boleto');
const Personas = require('../models/persona');
var fs = require('fs');
var path= require('path');
const { findOne } = require('../models/boleto');

//crear funciones
function home(req,res){
    res.status(200).send({
        message:'prueba de api banco modulo boleto'
    })
}
function pruebas(req,res){
    console.log(req.body);
    res.status(200).send({
        message:'prueba de api red social en Mean'
    })
}
function getBoletas(req,res){
    Boletas.find().populate('persona').exec((err,boletas)=>{
       if(err) return  res.status(500).send({Message:'Error en la peticion'});
       if(boletas){
           return res.status(200).send({
               boletas
           });
       }    
    });
   }
 
function ExistCorre(req,res){
    const PersonaDpi=req.params.Dpi;
    console.log(PersonaDpi);
    Personas.findOne({Dpi:PersonaDpi}).exec((err,Persona)=>{
        
        if(err) return  res.status(500).send({Message:'Error en la peticion'});
        if(!Persona) return  res.status(200).send({Message:'El DPI no existe'});
        if(Persona){
            console.log(Persona);
            console.log(Persona._id);
            Boletas.findOne({persona:Persona._id}).exec((err,boleta)=>{
                if(err) return  res.status(500).send({Message:'Error en la peticion'});
                if(!boleta) return  res.status(200).send({Estatus:'Boleta no existente'});
                if(boleta){
                    var enfoque = boleta.pagoBoleta.Correlativo
                    console.log(enfoque);
                 var corr=boleta.get('Correlativo')
                    return res.status(200).send({
                        correlativo:enfoque,
                        Estatus: "Pagado"
                    });
                    }      
                });
            }
        });
    }
        
    

//exportar funciones
module.exports={
home,pruebas,getBoletas,ExistCorre
}