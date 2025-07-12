import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try{
            return getUserUsername('68717f6cb9bc5c7fb71d54d4')
            .then(username => console.log('username gotten ', username))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())