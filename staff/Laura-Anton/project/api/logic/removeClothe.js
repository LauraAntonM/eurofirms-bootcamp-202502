import { User, Clothe } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError } from 'com'

/**
 * Removes a post by id from database.
 * 
 * @param {string} userId The requester user id.
 * @param {string} clotheId The clothe id to remove.
 */
export const removeClothe = (userId, clotheId) => {
    validate.id(userId)
    validate.id(clotheId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Clothe.findById(clotheId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(clothe => {
                    if (!clothe) throw new NotFoundError('clothe not found')

                    //if (user.role !== 'administrator') throw new AuthorshipError('user not author of clothe')
//TODO asignar administrador cuando esten los videos
                    return Clothe.deleteOne({ _id: clotheId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}