import { connect, disconnect } from '../data/index.js'
import { getUserUsername } from './getUserUsername.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try{
            return getUserUsername('6859a4b9e9798192a75c536b')
            .then(username => console.log('username gotten ', username))
            .catch(error => console.error(error))
        } catch(error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())