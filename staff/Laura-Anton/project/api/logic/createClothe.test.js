import { connect, disconnect } from '../data/index.js'
import { createClothe } from './createClothe.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try {
            return createClothe('6859a4b9e9798192a75c536b', 'https://www.zara.com/es/es/camiseta-asimetrica-drapeada-p01198180.html?v1=438594615&v2=2580457', 'camiseta color beige, estilo verano, sin mangas', 'S','CAMISAS/CAMISETAS', 'camiseta asimetrica')
                .then(() => console.log('Clothe created'))
                .catch(error => console.error(error))
        }

        catch (error) {
            console.error(error)
        }

        })
    .catch (error => console.error(error))
    .finally(() => disconnect())