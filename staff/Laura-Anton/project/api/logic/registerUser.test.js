import { connect, disconnect } from '../data/index.js'
import { registerUser } from './registerUser.js'

connect('mongodb://localhost:27017/test-tiendaapp')
.then(() => {
    try {
        return registerUser('Juan Anton', 'Juan@gmail.com', 'Juan28', '123123123', 'Pz/España', '662124583')
            .then(() => console.log ('user registered'))
            .catch(error => console.error(error))
    }catch (error) {
        console.error(error)
    }

    
})
.catch(error => console.error(error))
.finally(() => disconnect())
