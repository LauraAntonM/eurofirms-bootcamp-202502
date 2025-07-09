import { ValidationError } from './errors.js'

const categories = ['CAMISAS/CAMISETAS', 'TOP/BODY', 'VESTIDOS']

export const validate = {
    name(name) {
        if (typeof name !== 'string') throw new ValidationError('invalid name type')
        if (name.length < 1) throw new ValidationError('invalid name min length')
        if (name.length > 30) throw new ValidationError('invalid name max length')
    },
    email(email) {
        if (typeof email !== 'string') throw new ValidationError('invalid email type')
        if (email.length < 6) throw new ValidationError('invalid email min length')
        if (email.length > 30) throw new ValidationError('invalid email max length')
    },

    username(username) {
        if (typeof username !== 'string') throw new ValidationError('invalid username type')
        if (username.length < 3) throw new ValidationError('invalid username min length')
        if (username.length > 20) throw new ValidationError('invalid username max length')
    },

    password(password) {
        if (typeof password !== 'string') throw new ValidationError('invalid password type')
        if (password.length < 5) throw new ValidationError('invalid password min length')
        if (password.length > 20) throw new ValidationError('invalid password max length')
    },

    address(address) {
        if (typeof address !== 'string') throw new ValidationError('invalid address type')
        if (address.length < 5) throw new ValidationError('invalid address min length')
        if (address.length > 100) throw new ValidationError('invalid address max length')

    },

    phone(phone) {
        if (typeof phone !== 'string') throw new ValidationError('invalid phone type')
        if (phone.length < 9) throw new ValidationError('invalid phone min length')
        if (phone.length > 15) throw new ValidationError('invalid phone max length')
    },

    id(id) {
        if (typeof id !== 'string') throw new ValidationError('invalid Id type')
        if (id.length !== 24) throw new ValidationError('invalid Id length')
    },

    image(image) {
        if (typeof image !== 'string') throw new ValidationError('invalid image type')
    },

    description(description) {
        if (typeof description !== 'string') throw new ValidationError('invalid description type')
    },

    size(size) {
        if (typeof size !== 'string') throw new ValidationError('invalid size type')
        if (size.length < 1) throw new ValidationError('invalid size min length')
        if (size.length > 4) throw new ValidationError('invalid size max length')
    },

    category(category) {
        if (typeof category !== 'string') throw new ValidationError('invalid category type')
        if (category.length < 2) throw new ValidationError('invalid category min length')
        if (category.length > 50) throw new ValidationError('invalid category max length')
        //if (category !== 'VESTIDOS' || category !== 'CAMISAS/CAMISETAS' || category !== 'TOP/BODY') throw new ValidationError('invalid category')
        if (!categories.includes(category)) throw new ValidationError('invalid category')
    },

    title(title) {
        if (typeof title !== 'string') throw new ValidationError('invalid title type')
    },



}

