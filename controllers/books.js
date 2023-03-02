const router = require('express').Router()
const Books = require('../models/books')

router.get('/', async (req,res) => {
    try {
        const books = await Books.find()
        res.json(books)
    } catch (error) {
        console.log(error)
    res.status(400).json({'message': 'error getting resource'})
    }
})

router.post('/', async (req,res) => {
    //console.log('BODY', req.body)
  try {
    const books = await new Books(req.body).save()
    res.json(books)
  } catch (error) {
    console.log(error)
    res.status(400).json({'message': 'error creating resource'})
  } 
})

module.exports = router