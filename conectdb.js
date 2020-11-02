const mongoose = require('mongoose');

// Conexión a Base de datos
//CLOUD-MONGO
const user = process.env.USER;
const password = process.env.PASSWORD;
const dbName = process.env.DBNAME

const db = mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-ghrs9.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

    module.exports = db