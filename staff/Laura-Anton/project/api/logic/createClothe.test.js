import { connect, disconnect } from '../data/index.js'
import { createClothe } from './createClothe.js'

connect('mongodb://localhost:27017/test-tiendaapp')
    .then(() => {
        try {  
            return createClothe('68717f6cb9bc5c7fb71d54d4', 'https://static.zara.net/assets/public/b236/c521/b71c4cc0a642/86c7314738cf/03920726520-a1/03920726520-a1.jpg?ts=1746001924013&w=215', 'vestido lima, sin mangas', 'S','VESTIDOS', 'VESTIDO LIMA')
                .then(() => console.log('Clothe created'))
                .catch(error => console.error(error))
        }

        catch (error) {
            console.error(error)
        }

        })
    .catch (error => console.error(error))
    .finally(() => disconnect())