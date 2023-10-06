const mongoose = require("mongoose")

const gunplaSchema = new mongoose.Schema(
    {
        picture: {
            type: String,
            required: true 
        },

        name: {
            type: String,
            trim: true,
            maxlength: 200,
        },

        grade: {
            type: String,
            trim:true,
            maxlength: 5,
        },

        price: {
            type: String,
            trim: true,
            maxlength: 20,
        }
    }
)