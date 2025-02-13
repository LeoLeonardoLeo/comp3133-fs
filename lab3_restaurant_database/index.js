const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurantRoutes'); 

const app = express();
app.use(express.json());

const DB_CONNECTION = 'mongodb+srv://leonardo:PassWORd123@cluster0.xopob.mongodb.net/restaurantDB?retryWrites=true&w=majority';
mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection');
}).catch(err => {
    console.log('Error Mongodb connection');
});

app.use('/restaurants', restaurantRoutes);

app.listen(8081, () => { 
    console.log('Server is running...'); 
});