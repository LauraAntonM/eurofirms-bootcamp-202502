import { User, Clothe } from '../data/index.js'
import { validate, SystemError, NotFoundError, AuthorshipError, RoleError } from 'com'


export const removeClothe = (userId, clotheId) => {
    validate.id(userId)
    validate.id(clotheId)

    return User.findById(userId)
        .catch(error => { throw new SystemError('mongo error') })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
            if (user.role !== 'administrator') throw new RoleError('user is not administrator') 
            

            return Clothe.findById(clotheId)
                .catch(error => { throw new SystemError('mongo error') })
                .then(clothe => {
                    if (!clothe) throw new NotFoundError('clothe not found')

                    return Clothe.deleteOne({ _id: clotheId })
                        .catch(error => { throw new SystemError('mongo error') })
                        .then(() => { })
                })
        })
}