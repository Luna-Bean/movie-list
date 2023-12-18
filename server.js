const express = require('express');
const app = express()
//const bodyParser = require('body-parser');
//const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const dotenv = require('dotenv')
require('dotenv').config()
// const { response, request } = require('express');
const Movie = require('./model/model')
//const addPost = require('./server')


mongoose.connect(process.env.DB_String)

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (request , response) => {
    Movie.find()
    .then(result => {
        response.render('client.ejs',{ data: result } )
    })
})


app.post ('/addPost', (request, response)=>{
    const newMovie = new Movie({
        movies: request.body.movieValue , completed: false// object todo with task added in by user
    })
    newMovie.save()
    .then(result => {
        console.log('Movie added to list')
        response.redirect('/')
    })
})


app.delete('/:id', (request, response) => {
    Movie.findByIdAndDelete(request.params.id)
    .then(result => {
        console.log(result)
        response.redirect('/')
        
    })
})
app.listen(process.env.PORT, () => {

    console.log(`Server is running `)
})

