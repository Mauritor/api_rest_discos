const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();

// cors
const cors = require('cors');
var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// import routes
const discoRoutes = require('./routes/discos');
const artistRoutes = require('./routes/artistas')

// route middlewares
app.use('/api/discos', discoRoutes);
app.use('/api/artistas', artistRoutes);

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'API Discos Working!'
    })
});

    // iniciar server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})
