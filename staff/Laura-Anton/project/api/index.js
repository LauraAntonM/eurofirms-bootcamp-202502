import { connect } from './data/index.js'
import express from 'express'
import cors from 'cors'

import { usersRouter } from './routes/usersRouter.js'
import { errorHandler } from './middelwares/errorHandler.js'

const { MONGO_URL, PORT } = process.env

connect (MONGO_URL)
.then(() => {
    const api = express()

    api.use(cors())

    api.get('/hello', (request, response) => {
        response.send('Hello | 🤞')
    })

    api.use('/users', usersRouter)
    //crear otro api.use con el mismo código pero adaptado para peticiones relacionadas con la ropa 

    api.use(errorHandler)

    api.listen(PORT, () => console.log ('API lintening on port' + PORT))
})

.catch(error => console.error(error))