import mongoose, { trusted } from 'mongoose'

const { Schema, model } = mongoose
const { Types } = Schema
const { ObjectId } = Types

const user = new Schema ({
    name: { 
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true

    },

    username: {
        type: String,
        required: true,
        unique: true 
    },

    password: {
        type: String, 
        required: true
    },

    address: {
        type: String,
        required: true
    },

    phone: {
         type: String,
         required: true,
         unique: true
        }

})

const User = model('User', user)

export{
    User
}
