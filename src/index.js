const mongoose = require('mongoose');
const app = require('./app');
require("dotenv").config();
const port =process.env.PORT||3800;
//mongoose.Primise = global.Promise;
mongoose.connect(process.env.Mongo_URI2)
        .then(()=>{
            console.log("conexion exitosa a la base de datos Red Social")
            //crear el servidor con node y express
            app.listen(port,()=>{
                console.log("servidor corriendo en el puerto",port)
            })
        })
        .catch(err=>console.log(err));