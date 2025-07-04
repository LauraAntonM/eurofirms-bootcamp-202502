import { connect, disconnect } from '../data/index.js'
import { getClothes } from './getClothes.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try {
            return getClothes('6866c0d6f7eb36636cd4dfe2')
                .then(clothes => console.log('clothes', clothes))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .catch(error => console.error(error))
    .finally(() => disconnect())