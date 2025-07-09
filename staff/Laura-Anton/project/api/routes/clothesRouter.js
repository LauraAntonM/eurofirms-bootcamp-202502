import { Router } from 'express'
import { jsonBodyParser } from '../middlewares/jsonBodyParser.js'
import { logic } from '../logic/index.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET } = process.env

export const clothesRouter = Router()

clothesRouter.post('/', jsonBodyParser, (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { image, description, size, category, title } = request.body 

        logic.createClothe(userId, image, description, size, category, title) 
            .then(() => response.status(201).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

clothesRouter.get('/:category', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { category } = request.params

        logic.getClothes(userId, category)
            .then(clothes => response.status(200).json(clothes))
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})

clothesRouter.delete('/:postId', (request, response, next) => {
    try {
        const authorization = request.headers.authorization
        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { postId } = request.params

        logic.removePost(userId, postId)
            .then(() => response.status(204).send())
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
})