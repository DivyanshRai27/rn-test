const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.get('/',(req,res)=>{
    res.send("Welcome")
})

app.listen (3000,()=>{
    console.log("server running")
})