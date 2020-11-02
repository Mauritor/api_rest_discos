const router = require('express').Router();
require('../conectdb');
const Disco = require('../models/Discos');

router.get('/', async (req, res)=> {
    const data = await Disco.find().select({artist: 1}); 
    res.json({
        estado: true,
        mensaje: 'Todos los Artistas!',
        data
    })
})

module.exports = router;