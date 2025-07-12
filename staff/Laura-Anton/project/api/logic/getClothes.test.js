import { connect, disconnect } from '../data/index.js'
import { getClothes } from './getClothes.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try {
            return getClothes('68717f6cb9bc5c7fb71d54d4','VESTIDOS')
                .then(clothes => console.log('clothes', clothes))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())