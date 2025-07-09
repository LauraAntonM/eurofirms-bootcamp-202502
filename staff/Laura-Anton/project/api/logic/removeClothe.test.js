import { connect, disconnect } from '../data/index.js'
import { removeClothe } from './removeClothe.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try {
            return removeClothe('686d3429ccb2be6f5d06f63c', '686e19223cfa125695d365dd')
                .then(() => console.log('clothe removed'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())