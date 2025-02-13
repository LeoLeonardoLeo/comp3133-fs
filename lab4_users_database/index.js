const express = require('express')
const mongoose = require('mongoose')
const userSchema = require('./Schemas/User')
const userRoute = require('./routes/userRoute')

const app = express()
app.use(express.json())

const DB_CONNECTION = 'mongodb+srv://leonardo:PassWORd123@cluster0.xopob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection');
}).catch(err => {
    console.log('Error Mongodb connection');
});

app.use(userRoute)

const PORT = 8081
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})