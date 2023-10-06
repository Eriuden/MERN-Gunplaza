const mongoose = require("mongoose")
const {isEmail} = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
            minlength: 3,
            maxlength: 55,
            unique: true,
            trim: true,
        },

        email: {
            type: String,
            required:true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
        },

        pasword: {
            type: String,
            required:true,
            max: 1024,
            minlength: 6
        },
    }
)