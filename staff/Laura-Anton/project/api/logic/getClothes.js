import { User, Clothe } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'


export const getClothes = (userId, category)  => {
    validate.id(userId)
    validate.category(category.toUpperCase())

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Clothe.find({category: category.toUpperCase()}).select('-__v').lean()
                .catch(error => { throw new SystemError('mongo error') })
                .then(clothes => {
                    clothes.forEach(clothe => {
                        clothe.id = clothe._id.toString()
                        delete clothe._id

                        

                    })

                    return clothes
                })
        })
}