const mongoose = require('mongoose')
const Schema = mongoose.Schema


const movieSchema = new Schema({
    movies: {
        type: String,
        required: true
    },

    completed: { 
            type: Boolean,
            required: true

    },
    rating:{
        type: Number
    }
})

const movie = mongoose.model('ytMovies', movieSchema)

module.exports = movie