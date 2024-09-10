//importamos el modelo

import { where } from 'sequelize';
import Citas from '../models/Citas.js';

//funcion agregar citas

export const agregarCitas = async (req, res) =>{

try{
    await Citas.create(req.body);
    res.json({msg: "se agrego una cita"});

}catch (error){
    res.json({msg: error.message});

}

}

//funcion mostrar citas

export const mostrarCitas = async (req, res) =>{
try{
    const citas = await Citas.findAll();
    res.json(citas)

}catch (error) {
    res.json({msg: error.message});


}}

//funcion para mostrar una cita

export const getCita = async (req, res) =>{
    try{
        const cita = await Citas.findAll({
            where:{id: req.params.id}
        });
        res.json(cita);

    }catch (error) {
        res.status(500).send("error");
    }
}


//funcion modificar citas

export const modificarCitas = async (req, res)=>{
    try {
        await Citas.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({msg:"se modifico la cita"})

    }catch (error){
        res.json({msg: error.message});
    }
}

//funcion eliminar citas

export const eliminarCitas = async (req, res) =>{
    try{
        await Citas.destroy({
            where:{id: req.params.id}
})
res.json({msg:"se elimino la cita"})


    }catch (error) {
        res.json({msg: error.message});
    }
}