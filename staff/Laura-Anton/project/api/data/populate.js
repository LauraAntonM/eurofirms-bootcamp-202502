import mongoose from 'mongoose'
import { User } from './models.js'

const { connect, disconnect } = mongoose

connect('mongodb://localhost:27017/test-tiendaapp')
.then(() => {

    return User.create({
        name: 'Laura Anton',
        username: 'Laura28',
        password: '123123123',
        address: 'Pz/España',
        email: 'laura@gmail.com',
        phone: '662124583'
        })

})

.catch(error => console.error(error))
.finally(() => disconnect())

