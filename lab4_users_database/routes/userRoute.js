const express = require('express')
const User = require('../Schemas/User')
const app = express()

//http://localhost:8081/users
app.post('/users', async (req, res) =>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).json({message: "User added"})
    }
    catch(error){
        res.status(500).json({error: error.message})
    }
})

module.exports = app