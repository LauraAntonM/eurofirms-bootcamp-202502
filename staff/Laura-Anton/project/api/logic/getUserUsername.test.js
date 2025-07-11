import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try{
            return getUserUsername('68716886bde60d526b88a965')
            .then(username => console.log('username gotten ', username))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())