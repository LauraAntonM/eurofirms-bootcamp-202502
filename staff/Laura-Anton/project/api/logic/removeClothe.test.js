import { connect, disconnect } from '../data/index.js'
import { removeClothe } from './removeClothe.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try {
            return removeClothe('6871782f1c560aff0df278a7', '687178d10ee0a3ab753e9f54')
                .then(() => console.log('clothe removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())