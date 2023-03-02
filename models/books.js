const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    coverImage: {
        type: String
    },
    authorImage: {
        type: String
    }
})

module.exports = mongoose.model('Books', booksSchema)