import { User, Clothe } from '../data/index.js'
import { validate, SystemError, NotFoundError } from 'com'

/**
 * 
 * @param {string} userId 
 * @param {string} image 
 * @param {string} description 
 * @param {String} size 
 * @param {String} category
 * @param {String} title
 */
export const createClothe =  (userId, image, description, size, category, title) => {
    validate.userId(userId)
    validate.image(image)
    validate.description(description)
    validate.size(size)
    validate.category(category)
    validate.title(title)

    return User.findById (userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Clothe.create({ image, description, size, category, title})
                .catch(error => { throw new SystemError('mongo error') })
                .then(() => { })
        })
}