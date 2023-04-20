import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {fantasyBooks} from "./Books/fantasy.js";

const PORT = process.env.PORT || 3030

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/:id', (req, res) => {
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

app.get('/', (req, res) => {
    res.status(200).json(fantasyBooks)
})

app.listen(PORT, () => console.log(`Server listening to port ${PORT}`))
