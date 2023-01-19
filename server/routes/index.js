const { Router } = require('express');
const router = Router();


const Vulnerabilidad = require('../models/vulnerabilidades');

//AÑADIR VULNERABILIDADES
router.post('/addVulnerabilidad',async (req,res)=>{
    const { nombre,descripcionCorta,descripcionLarga,mitigacion,foto } = req.body;
    const nuevaVulnerabilidad = new Vulnerabilidad({
        nombre,descripcionCorta,descripcionLarga,mitigacion,foto
    });
    await nuevaVulnerabilidad.save();
    res.send('Vulnerabilidad añadida');
});

//LISTAR TODAS LAS VULNERABILIDADES
router.get('/',async (req,res)=>{
    const vulnerabilidades = await Vulnerabilidad.find();
    res.json(vulnerabilidades);
});

//LISTAR UNA SOLA VULNERABILIDAD
router.get('/vulnerabilidad/:id',async (req,res)=>{
    const vulnerabilidad = await Vulnerabilidad.findById(req.params.id);
    res.json(vulnerabilidad);
});

//ELIMINAR VULNERABILIDADES
router.delete('/eliminarVulnerabilidad/:id',async (req,res)=>{
    await Vulnerabilidad.findByIdAndDelete(req.params.id);
    res.json({"vulnerabilidad":"borrada"});
});

//EDITAR VULNERABILIDADES
router.put('/editarVulnerabilidad/:id',async (req,res)=>{
   const { id } = req.params.id;
   const vulnerabilidad = {
       nombre: req.body.nombre,
       descripcionCorta: req.body.descripcionCorta,
       descripcionLarga: req.body.descripcionLarga,
       mitigacion: req.body.mitigacion
   }
   await Vulnerabilidad.findByIdAndUpdate(req.params.id,{$set:vulnerabilidad},{new:true});
   res.send('Vulnerabilidad actualizada');

});

module.exports = router;