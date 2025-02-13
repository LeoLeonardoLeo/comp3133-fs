const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        minlength: 4
    },
    email:{
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Wrong email format"],
    },
    address:{
        street:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true,
            match: [/^[A-Za-z\s]+$/, "Must only have letters and spaces"],
        },
        zipcode: {
            type: String,
            required: true,
            match: [/^\d{5}-\d{4}$/, "Zip code must be in DDDDD-DDDD format"],
        },
    },
    phone: {
        type: String,
        required: true,
        match: [/^1-\d{3}-\d{3}-\d{4}$/, "Phone number must be in format 1-DDD-DDD-DDDD"],
    },
    website: {
        type: String,
        required: true,
        match: [/^(http|https):\/\/[^\s$.?#].[^\s]*$/, "Wrong URL format"],
    },
    
})

const User = mongoose.model("User", userSchema)
module.exports = User