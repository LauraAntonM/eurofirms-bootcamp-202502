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



const clothe = new Schema ({

    image: {
        type: String,
        required: true 
        
    },

    description: {

        type: String,
        required: true
    }, 

    size: { 

        type: String,
        required : true,
        enum: ['XS','S','M','L', 'XL']
    },

    category: {

        type: String,
        required: true,
        enum: ['CAMISAS/CAMISETAS', 'TOP/BODY', 'VESTIDOS'], 
    },

    title: {

        type: String,
        required: true,
        unique: true
    }

})

const User = model('User', user)
const Clothe = model('Clothe', clothe)

export {User, Clothe}


