import { User, Clothe } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

export const getClothes = (userId, category) => {
    validate.id(userId)

    return User.findById(userId)
        .catch(() => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            const query = {}

            if (category) {
                validate.category(category.toUpperCase())
                query.category = category.toUpperCase()
            }

            return Clothe.find(query).select('-__v').lean()
                .catch(() => { throw new SystemError('mongo error') })
                .then(clothes => {
                    clothes.forEach(clothe => {
                        clothe.id = clothe._id.toString()
                        delete clothe._id
                    })

                    return clothes
                })
        })
}
