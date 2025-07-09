import { connect, disconnect } from '../data/index.js'
import { getClothes } from './getClothes.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try {
            return getClothes('686d3429ccb2be6f5d06f63c','VESTIDOS')
                .then(clothes => console.log('clothes', clothes))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())