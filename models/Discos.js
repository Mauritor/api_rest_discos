const mongoose = require('mongoose');

const discoSchema = mongoose.Schema({
    album: {
        name: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        cover: {
            type: String
        },
        score: {
            type: Number
        },
        genre: []
    },
    artist: {
        name: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        foto: {
            type: String
        }
    }
})

module.exports = mongoose.model('Disco', discoSchema);