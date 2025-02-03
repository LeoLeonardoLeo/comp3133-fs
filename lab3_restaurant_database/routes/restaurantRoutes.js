const express = require('express');
const restaurantSchema = require('../schemas/restaurantSchema');
const app = express();

// Get all restaurants
// http://localhost:8081/restaurants
app.get('/restaurants', async (req, res) => {
    try {
        const restaurants = await restaurantSchema.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Search by cuisine
// http://localhost:8081/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const restaurants = await restaurantSchema.find({ cuisine: req.params.cuisine });
        res.json(restaurants); // Send the response back to the client
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Delicatessen in Brooklyn
app.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await restaurantSchema.find(
            { cuisine: 'Delicatessen', city: 'Brooklyn' },
            { _id: 0, cuisine: 1, name: 1, city: 1 }
        ).sort({ name: 1 }); // Ascending order

        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = app;