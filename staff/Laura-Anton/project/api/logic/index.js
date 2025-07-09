import { registerUser } from './registerUser.js'
import { authenticateUser } from './authenticateUser.js'
import { getUserUsername } from './getUserUsername.js'
import { createClothe } from './createClothe.js'
import { getClothes } from './getClothes.js'
import { removeClothe } from './removeClothe.js'

export const logic = {
    registerUser,
    authenticateUser,
    getUserUsername,
    createClothe,
    getClothes,
    removeClothe
}