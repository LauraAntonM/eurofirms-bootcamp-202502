import mongoose from 'mongoose'
import { User, Clothe } from './models.js'

const { connect, disconnect } = mongoose

export {
    connect,
    disconnect,

    User,
    Clothe
}

