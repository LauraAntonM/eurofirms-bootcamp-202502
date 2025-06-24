import { Router } from 'express'
import { jsonBodyParser } from '../middelwares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const usersRouter = Router()

usersRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const { name, email, username, password, address, phone } = request.body

        logic.registerUser(name, email, username, password, address, phone)
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

