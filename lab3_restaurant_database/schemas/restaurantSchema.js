const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
    address: {
        building: String,
        street: String,
        zipcode: String
    },
    name:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    cuisine:{
        type: String,
        require: true
    },
    restaurant_id:{
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Restaurant', restaurantSchema);
