const express = require('express')

require('dotenv').config()

const booksRoutes = require('./controllers/books')
const pokemonRoutes = require('./routes/pokemon')

const app = express()

//middleware
app.use(express.json())

app.use('/books', booksRoutes)
app.use('/pokemon', pokemonRoutes)

// db connection


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))