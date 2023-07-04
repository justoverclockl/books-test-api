import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {fantasyBooks} from "./Books/fantasy.js";
import {historyBooks} from "./Books/history.js";
import {horrorBooks} from "./Books/horror.js";
import {scifiBooks} from "./Books/scifi.js";
import {romanceBooks} from "./Books/romance.js";


const PORT = process.env.PORT || 3030

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// *************************** FANTASY ******************************

app.get('/fantasy', (req, res) => {
    res.status(200).json(fantasyBooks)
})
app.get('/fantasy/:id', (req, res) => {
    const {id} = req.params

    try {
        const filterBooks = fantasyBooks.filter(book => book.asin === id)
        res.status(200).json(filterBooks)
    } catch(error) {
        res.status(500).send({
            message: 'Errore interno del server'
        })
    }
})

// *************************** HORROR ******************************

app.get('/horror', (req, res) => {
    res.status(200).json(horrorBooks)
})

app.get('/horror/:id', (req, res) => {
    const {id} = req.params

    try {
        const filterBooks = horrorBooks.filter(book => book.asin === id)
        res.status(200).json(filterBooks)
    } catch(error) {
        res.status(500).send({
            message: 'Errore interno del server'
        })
    }
})

// *************************** scifi ******************************

app.get('/scifi', (req, res) => {
    res.status(200).send(scifiBooks)
})

app.get('/scifi/:id', (req, res) => {
    const {id} = req.params

    try {
        const filterBooks = scifiBooks.filter(book => book.asin === id)
        res.status(200).json(filterBooks)
    } catch(error) {
        res.status(500).send({
            message: 'Errore interno del server'
        })
    }
})

// *************************** history ******************************

app.get('/history', (req, res) => {
    res.status(200).json(historyBooks)
})

app.get('/history/:id', (req, res) => {
    const {id} = req.params

    try {
        const filterBooks = historyBooks.filter(book => book.asin === id)
        res.status(200).json(filterBooks)
    } catch(error) {
        res.status(500).send({
            message: 'Errore interno del server'
        })
    }
})

// *************************** romance ******************************

app.get('/romance', (req, res) => {
    res.status(200).json(romanceBooks)
})

app.get('/romance/:id', (req, res) => {
    const {id} = req.params

    try {
        const filterBooks = romanceBooks.filter(book => book.asin === id)
        res.status(200).json(filterBooks)
    } catch(error) {
        res.status(500).send({
            message: 'Errore interno del server'
        })
    }
})


app.get('/', (req, res) => {
    res.status(200).json(fantasyBooks
        .concat(historyBooks)
        .concat(romanceBooks)
        .concat(scifiBooks)
        .concat(horrorBooks))
})

app.get('/:id', (req, res) => {
    const {id} = req.params

    try {
        const filteredBooks = fantasyBooks
            .concat(historyBooks)
            .concat(romanceBooks)
            .concat(scifiBooks)
            .concat(horrorBooks)
            .filter(book => book.asin === id)

        res.status(200).json(filteredBooks)
    } catch(error) {
        res.status(500).send({
            message: 'Errore interno del server'
        })
    }
})

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`))
