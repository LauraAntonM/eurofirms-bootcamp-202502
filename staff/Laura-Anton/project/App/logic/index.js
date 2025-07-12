import { registerUser } from './registerUser'
import { loginUser } from './loginUser'
import { isUserLoggedIn } from './isUserLoggedIn'
import { getUserUsername } from './getUserUsername'
import { logoutUser } from './logoutUser'
import { isUserAdministrator } from './isUserAdministrator'

import { getClothes } from './getClothes'
import { createClothe } from '../../api/logic/createClothe'
import { removeClothe } from '../../api/logic/removeClothe'

 export const logic = {
    registerUser,
    loginUser,
    isUserLoggedIn,
    getUserUsername,
    logoutUser,
    isUserAdministrator,

    getClothes,
    createClothe,
    removeClothe

}