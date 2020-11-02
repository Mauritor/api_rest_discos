# API Rest
**Rank de discos**

## *routes/discos.js*
```javascript 
const router = require('express').Router();
require('../conectdb');
const Disco = require('../models/Discos');

router.get('/', async (req, res) => {
    const data = await Disco.find();
    try {
        res.json({
            estado: true,
            mensaje: 'Todos los Discos!',
            data
        })
    } catch (error) {
        res.status(400).json({ error })
    }
})

router.post('/', async (req, res) => {
    const dato = req.body;
    try {
        const data = new Disco(dato); 
        await data.save();
        res.status(200).json({ data })
    } catch (error) {
        res.status(400).json({ error })
    }
})

module.exports = router;
```
## *routes/artistas.js*
```javascript 
cconst router = require('express').Router();
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
```